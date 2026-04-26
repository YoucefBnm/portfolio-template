import { TextStaggerInview } from "@/components/systaliko-ui/text-stagger-inview";
import { ANIMATION_VARIANTS } from "@/components/systaliko-ui/utils/animation-variants";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import * as motion from "motion/react-client";

export function About() {
  const animationVaiants = ANIMATION_VARIANTS["bottom"];
  return (
    <section className="px-12 place-content-center min-h-screen">
      <div className="md:w-4/5 lg:3/5 text-center mx-auto space-y-6">
        <TextStaggerInview
          staggerValue={0.005}
          animation="left"
          className="text-2xl items-center font-semibold text-balance"
        >
          They call me d&d that’s not my rap name one D for developer and other
          for designer, and in the dark nights when you miss the moon I&apos;m
          be available, no matter what you wanna create I&apos;ll create it, you
          have an old radio and you wanna listen to alvis I’ll make it
          happen.{" "}
        </TextStaggerInview>

        <motion.div
          transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
          variants={animationVaiants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button>
            Fix your radio <ArrowRightIcon />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
