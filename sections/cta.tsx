import { GridBento } from "@/components/systaliko-ui/blocks/grid-bento"
import { ScrollAnimation, ScrollScale, ScrollTranslateY } from "@/components/systaliko-ui/blocks/scroll-animation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const IMAGES = [
    "https://images.unsplash.com/photo-1677184915745-03e070e63a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1547658718-1cdaa0852790?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D",
    "https://images.unsplash.com/photo-1692355120825-14962a0c33dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export function Cta () {
    return (
        <section>
            <ScrollAnimation className="">
                <ScrollTranslateY className="h-dvh md:w-4/5 mx-auto py-8 px-6 grid grid-cols-12 grid-rows-1">
                    <ScrollScale 
                        className="col-start-2 col-end-12 row-start-1 row-end-2 flex flex-col justify-center items-center space-y-4 text-center relative z-10 mix-blend-difference"
                        scaleRange={[0, 1]}
                        inputRange={[0.4, 0.8]}
                    >
                        <h2 className="text-4xl font-bold tracking-tight uppercase">Let&apos;s work together</h2>
                        <p className="text-muted-foreground text-sm max-w-[53ch]">
                            Want to work together on a project? I&apos;ll help you find the right fit, and we&apos;ll make it happen, 
                            no matter what your project is, or what your budget is, or what your timeline is.
                        </p>
                        <Button>
                            Get in touch
                        </Button>
                    </ScrollScale>
                    
                    <GridBento variant={'fourCells'} className="[&>*:first-child]:origin-[10%_0%] [&>*:first-child]:hidden [&>*:first-child]:md:block  [&>*:nth-child(2)]:col-span-3  [&>*:nth-child(2)]:md:col-span-2 col-start-1 row-start-1 pointer-events-none row-end-2 col-end-13">
                        {IMAGES.map((imageUrl, index) => (
                            <ScrollScale
                                key={index}
                                inputRange={[0.4, 0.8]}
                                scaleRange={[1, 0.5]}
                                className="overflow-hidden w-full"
                            >
                            <Image
                                className="size-full object-cover rounded-lg"
                                fill
                                sizes="(max-width: 768px) 100vw, 1200px"
                                src={imageUrl}
                                alt="showcase"
                            />
                            </ScrollScale>
                        ))}
                    </GridBento>
                </ScrollTranslateY>
            </ScrollAnimation>
           
        </section>
    )}