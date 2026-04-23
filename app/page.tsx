import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Work } from "@/components/sections/work";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <Work />
      <Experience />
      <Services />
      <Testimonials />
    </ReactLenis>
  );
}
