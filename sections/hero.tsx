'use client'
import { ContainerStagger } from "@/components/systaliko-ui/blocks/container-stagger";
import Image from "next/image";
import {motion, MotionConfig} from 'motion/react'
import { ANIMATION_VARIANTS } from "@/components/systaliko-ui/utils/animation-variants";
import { TextStaggerInview } from "@/components/systaliko-ui/text/text-stagger-inview";
import GithubIcon from "@/components/icons/github-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";

export function Hero () {
    const scaleAnimation = ANIMATION_VARIANTS['z']
    const opacityAnimation = ANIMATION_VARIANTS['default']
    return (
        <section className="space-y-6 py-12 px-6">
            <ContainerStagger className="min-h-[75vh] place-content-center place-items-center text-center space-y-4">
                <MotionConfig transition={{ duration: 0.3}}>
                    <motion.div 
                        className="relative rounded-xl w-28 aspect-square overflow-hidden"
                        variants={scaleAnimation}
                    >
                        <Image 
                            fill
                            className="object-contain"
                            sizes="(max-width: 468px) 30vw, 200px"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="ycf"
                        />
                    </motion.div>

                    <TextStaggerInview animation="left" as="h1" className="text-[7vw] leading-none font-bold tracking-tight uppercase">Designer & Developer</TextStaggerInview>
                    <motion.p variants={opacityAnimation} className="text-xl font-medium text-muted-foreground tracking-tight">
                        I know how to switch computer button
                    </motion.p>
                    
                    <motion.div className="flex gap-2" variants={opacityAnimation}>
                        <a href="https://www.github.com" target="_blank" className="rounded-md p-2 inline-flex items-center justify-center bg-secondary/0 hover:bg-secondary">
                            <GithubIcon className="size-6" />
                        </a>
                        <a href="https://www.github.com" target="_blank" className="rounded-md p-2 inline-flex items-center justify-center bg-secondary/0 hover:bg-secondary">
                            <LinkedinIcon className="size-6" />
                        </a>
                    </motion.div>
                </MotionConfig>
            </ContainerStagger>
        </section>
    )
}