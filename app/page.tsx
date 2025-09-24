import { About } from "@/sections/about";
import { Cta } from "@/sections/cta";
import { Experience } from "@/sections/experience";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";
import { Work } from "@/sections/work";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <Services />
      <Work />
      <About />
      <Experience />
      <Cta />
    </ReactLenis>
  );
}
