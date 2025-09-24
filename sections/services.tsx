'use client'
import { Parallax, ParallaxItem, PrallaxContainer } from "@/components/systaliko-ui/blocks/parallax";
import Image from "next/image";

export function Services () {
    return (
        <section>
            <Parallax className="min-h-[100rem] py-8 px-6">
                <div className='sticky z-10 mix-blend-difference top-0 h-screen space-y-4 w-full flex flex-col justify-center items-center text-center'>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight dark:text-foreground text-background">
                        Design Engineer
                    </h1>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight dark:text-foreground text-background">
                        Product Designer
                    </h1>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight dark:text-foreground text-background">
                        UX Designer
                    </h1>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight dark:text-foreground text-background">
                        Frontend Engineer
                    </h1>
                </div>

                <PrallaxContainer className="flex flex-wrap justify-evenly gap-4 w-full">
                    <ParallaxItem
                        className="relative basis-1/3 max-h-[80vh]"
                        start={0}
                        end={-200}
                    >
                    <Image
                        fill 
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 200px"
                        src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="showcase"
                    />
                    </ParallaxItem>

                    <ParallaxItem
                        className="relative basis-1/3 max-h-[80vh]"
                        start={300}
                        end={-100}
                    >
                        <Image
                            fill 
                            sizes="(max-width: 768px) 100vw, 200px"
                            className="object-contain"
                            src="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="showcase"
                        />
                    </ParallaxItem>

                    <ParallaxItem
                        className="relative basis-1/3 max-h-[80vh]"
                        start={400}
                        end={-100}
                    >
                        <Image
                            fill 
                            sizes="(max-width: 768px) 100vw, 200px"
                            className="object-contain"
                            src="https://images.unsplash.com/photo-1677184915745-03e070e63a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
                            alt="showcase"
                        />
                    </ParallaxItem>

                    <ParallaxItem
                        className="relative basis-1/3 max-h-[80vh]"
                        start={500}
                        end={-100}
                    >
                        <Image
                            fill 
                            sizes="(max-width: 768px) 100vw, 200px"
                            className="object-contain"
                            src="https://images.unsplash.com/photo-1633194486274-8953df0d4064?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                            alt="showcase"
                        />
                    </ParallaxItem>

                    <ParallaxItem
                        className="relative basis-1/3 max-h-[80vh]"
                        start={400}
                        end={-200}
                    >
                        <Image
                            fill 
                            sizes="(max-width: 768px) 100vw, 200px"
                            className="object-contain"
                            src="https://images.unsplash.com/photo-1547658718-1cdaa0852790?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="showcase"
                        />
                    </ParallaxItem>
                </PrallaxContainer>

            </Parallax>
        </section>
    )
}