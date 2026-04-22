"use client";
import * as React from "react";

import {
  HTMLMotionProps,
  motion,
  MotionConfig,
  stagger,
  StaggerOrigin,
} from "motion/react";
import { ANIMATION_VARIANTS, AnimationT } from "./utils/animation-variants";

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT;
}

export function WordStagger({
  children,
  animation = "default",
  ...props
}: WordProps) {
  const characters = String(children).split("");
  const animationVariants = ANIMATION_VARIANTS[animation];
  return (
    <span
      className="inline-block text-nowrap"
      data-word={String(children)}
      {...props}
    >
      {characters.map((char, index) => (
        <motion.span
          className="inline-block"
          variants={animationVariants}
          key={`${char}-${index}`}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

interface TextStaggerProps extends HTMLMotionProps<"span"> {
  staggerValue?: number;
  staggerStart?: StaggerOrigin;
  animation?: AnimationT;
}

export function TextStaggerInview({
  children,
  transition,
  className,
  viewport = { amount: "all", once: true },
  staggerValue = 0.02,
  staggerStart = "first",
  animation,
  ...props
}: TextStaggerProps) {
  const words = String(children).split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView={"visible"}
      viewport={viewport}
      className={className}
      transition={{
        delayChildren: stagger(staggerValue, { from: staggerStart }),
      }}
      {...props}
    >
      <MotionConfig
        transition={{
          ease: transition?.ease || "easeOut",
          ...transition,
        }}
      >
        {words.map((word, index) => (
          <React.Fragment key={`${word}-${index}`}>
            <WordStagger animation={animation}>{word}</WordStagger>
            {index < words.length - 1 && " "}
          </React.Fragment>
        ))}
      </MotionConfig>
    </motion.span>
  );
}
