"use client";
import { motion, MotionConfig } from "motion/react";
import { ANIMATION_VARIANTS } from "@/components/systaliko-ui/utils/animation-variants";
import { TextStaggerInview } from "@/components/systaliko-ui/text-stagger-inview";
import GithubIcon from "@/components/icons/github-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import { Badge } from "../ui/badge";
import { Pulse } from "../pulse";
import { ClockIcon, MapPinIcon } from "lucide-react";
import { ContainerStagger } from "../systaliko-ui/container-stagger";
import clsx from "clsx";

const opacityAnimation = ANIMATION_VARIANTS["default"];
function HeroText() {
  return (
    <>
      <TextStaggerInview
        staggerStart={"center"}
        animation="left"
        staggerValue={0.04}
        className={clsx(
          "text-7xl font-bold tracking-tight uppercase",
          "*:data-[word='designer']:inline-flex *:data-[word='designer']:items-center",
          "*:data-[word='designer']:after:block",
          "*:data-[word='designer']:after:ml-4 *:data-[word='designer']:after:rounded-xl",
          "*:data-[word='designer']:after:size-11",
          "*:data-[word='designer']:after:bg-cover ",
          "*:data-[word='designer']:after:bg-center",
          "*:data-[word='designer']:after:bg-[url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop')]",
          "*:data-[word='designer']:after:content-[''/'Profile_Picture']",
          "*:data-[word='designer']:after:animate-[reveal_1s_ease-out_forwards]",
        )}
      >
        designer developer
      </TextStaggerInview>

      <motion.p
        className="row-start-2 text-sm text-muted-foreground"
        variants={opacityAnimation}
      >
        I know how to switch computer button beside other stuff
      </motion.p>
    </>
  );
}

function HeroSocials() {
  return (
    <motion.div className="self-end flex gap-2" variants={opacityAnimation}>
      <a
        href="https://github.com/YoucefBnm/"
        target="_blank"
        className="rounded-md p-2 inline-flex items-center justify-center hover:bg-secondary text-primary"
      >
        <GithubIcon className="size-5" />
      </a>
      <a
        href="https://github.com/YoucefBnm/"
        target="_blank"
        className="rounded-md p-2 inline-flex items-center justify-center hover:bg-secondary text-primary"
      >
        <LinkedinIcon className="size-5" />
      </a>
    </motion.div>
  );
}

function HeroBadges() {
  return (
    <motion.div
      className="self-start flex gap-2 flex-wrap"
      variants={opacityAnimation}
    >
      <Badge className="rounded-full" variant="outline">
        <Pulse /> Available for projects
      </Badge>

      <Badge className="rounded-full" variant="outline">
        <MapPinIcon /> Oran - Algeria
      </Badge>
      <Badge className="rounded-full" variant="outline">
        <ClockIcon /> UTC + 1
      </Badge>
    </motion.div>
  );
}
export function Hero() {
  return (
    <section className="min-h-[90vh] place-content-center relative py-16 px-8">
      <ContainerStagger className="grid lg:grid-cols-2  space-y-4">
        <MotionConfig transition={{ duration: 0.5 }}>
          <HeroText />
          <HeroSocials />
          <HeroBadges />
        </MotionConfig>
      </ContainerStagger>
    </section>
  );
}
