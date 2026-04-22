import { Nav } from "@/components/nav";
import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";
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
    // <div ref={ref} className="relative h-[300vh]">
    //   <div className="sticky h-screen left-0 top-0 place-content-center p-8 grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 bg-blue-200 overflow-hidden items-center">
    //     <div className="w-3xs mx-auto aspect-[3/5] place-content-center space-y-6 grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 *:size-full *:odd:rotate-2 *:even:-rotate-2">
    //       <motion.div
    //         style={{ x: x1 }}
    //         className="bg-blue-500/90 backdrop-blur-sm "
    //       >
    //         item 1
    //       </motion.div>

    //       <motion.div
    //         style={{ x: x2 }}
    //         className="bg-green-500/90 backdrop-blur-sm "
    //       >
    //         item 2
    //       </motion.div>

    //       <motion.div
    //         style={{ x: x3 }}
    //         className="bg-indigo-500/90 backdrop-blur-sm "
    //       >
    //         item 3
    //       </motion.div>
    //     </div>
    //   </div>
    // </div>
  );
}
