'use client';
import * as React from 'react';

import { ANIMATION_VARIANTS, AnimationT } from '@/components/systaliko-ui/utils/animation-variants';
import {
  HTMLMotionProps,
  motion,
  MotionConfig,
  Transition,
  Variants,
} from 'motion/react';
import { TRANSITIONS } from '@/components/systaliko-ui/utils/transitions';
import { cn } from '@/lib/utils';

interface TextStaggerProps extends HTMLMotionProps<'span'> {
  stagger?: number;
  staggerDirection?: 1 | -1;
  animation?: AnimationT;
  characterTransition?: Transition;
  as?: React.ElementType;
}
function useAnimationVariants(animation?: AnimationT) {
  return ANIMATION_VARIANTS[animation || 'default'];
}
function useParseText(text: React.ReactNode) {
  return React.useMemo(() => {
    const stringText = String(text);
    return {
      words: stringText.split(' '),
      characters: stringText.split(''),
    };
  }, [text]);
}

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT;
  word: string;
  wordIndex: number;
}

const Character = React.memo(({ char, variants }: {
  char: string;
  index: number;
  variants?: Variants;
}) => (
  <motion.span
    className="inline-block"
    variants={variants}
    style={{ display: 'inline-block' }} 
  >
    {char === ' ' ? '\u00A0' : char} 
  </motion.span>
));
Character.displayName = 'Character';

export const WordStagger = React.memo(({
  word,
  wordIndex,
  animation,
  className,
  ...props
}: WordProps) => {
  const characters = React.useMemo(() => word.split(''), [word]);
  const animationVariants = useAnimationVariants(animation);
  
  return (
    <span 
      className={cn('inline-block text-nowrap', className)} 
      data-word={word}
      {...props}
    >
      {characters.map((char, index) => (
        <Character
          key={`${wordIndex}-${index}`} 
          char={char}
          index={index}
          variants={animationVariants}
        />
      ))}
    </span>
  );
});
WordStagger.displayName = 'WordStagger';

const WordWrapper = React.memo(({ 
  word, 
  index, 
  animation, 
  characterTransition,
  showSpace 
}: {
  word: string;
  index: number;
  animation?: AnimationT;
  characterTransition: Transition;
  showSpace: boolean;
}) => (
  <>
    <MotionConfig transition={characterTransition}>
      <WordStagger 
        word={word} 
        wordIndex={index}
        animation={animation}
      />
    </MotionConfig>
    {showSpace && ' '}
  </>
));
WordWrapper.displayName = 'WordWrapper';

export const TextStaggerInview = React.memo(({
  children,
  transition,
  className,
  stagger = 0.02,
  staggerDirection = 1,
  animation,
  characterTransition = TRANSITIONS,
  as: Component = 'span',
  ...props
}: TextStaggerProps) => {
  const { words } = useParseText(children as React.ReactNode);

  const MotionComponent = React.useMemo(
    () => motion.create(Component),
    [Component]
  );
  
  const containerTransition = React.useMemo(
    () => ({
      staggerChildren: stagger,
      staggerDirection,
      ...transition,
    }),
    [stagger, staggerDirection, transition]
  );
  
  const viewportOptions = React.useMemo(
    () => ({ once: true, amount: 0.1 }), 
    []
  );
  
  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={className}
      transition={containerTransition}
      {...props}
    >
      {words.map((word, index) => (
        <WordWrapper
          key={`${index}-${word.slice(0, 3)}`} // Better key strategy
          word={word}
          index={index}
          animation={animation}
          characterTransition={characterTransition}
          showSpace={index < words.length - 1}
        />
      ))}
    </MotionComponent>
  );
});
TextStaggerInview.displayName = 'TextStaggerInview';
