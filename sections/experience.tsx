'use client'
import * as React from 'react'
import AmazonIcon from "@/components/icons/amazon-icon";
import AppleIcon from "@/components/icons/apple-icon";
import GoogleIcon from "@/components/icons/google-icon";
import { motion, useScroll, useSpring } from 'motion/react';
import { TextStaggerInview } from '@/components/systaliko-ui/text/text-stagger-inview';

const EXPERIENCE_HISTORY = [
    {
        id: 'experience-history-amazon',
        company: 'Amazon',
        title: 'Senior Software Engineer',
        description: "my main role was to lead the development of the Amazon Echo smart speaker, which was a massive project that required a team of over 100 engineers. I was responsible for the design, development, and testing of the Echo's voice assistant, as well as the integration of Amazon's Alexa and Google Assistant services.",
        icon: AmazonIcon,
        periode: '2019 - 2022',
    },
    {
        id: 'experience-history-google',
        company: 'Google',
        title: 'Software Engineer',
        description: "my main role was to lead the development of the Google Assistant smart speaker, which was a massive project that required a team of over 100 engineers. I was responsible for the design, development, and testing of the Echo's voice assistant, as well as the integration of Amazon's Alexa and Google Assistant services.",
        icon: GoogleIcon,
        periode: '2022 - 2023',
    },
    {
        id: 'experience-history-apple',
        company: 'Apple',
        title: 'Software Engineer',
        description: "left after the glass design update, the Apple's Siri smart speaker, which was a massive project that required a team of over 100 engineers. I was responsible for the design, development, and testing of the Echo's voice assistant, as well as the integration of Amazon's Alexa and Google Assistant services.",
        icon: AppleIcon,
        periode: '2023 - 2025',
    },
]

export function Experience () {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start center', 'end end'],
    })
    const scaleY = useSpring(scrollYProgress,{
        damping: 50,
        stiffness: 300,
        restDelta: 0.001,
    
    })
    return (
        <section ref={scrollRef} className="pb-12 px-8">
            <TextStaggerInview viewport={{ amount: 'all', once: true }} as={'h2'} animation='left' className="text-4xl place-self-center mb-8 font-bold tracking-tight uppercase">
                experience history
            </TextStaggerInview>
            <div className="md:h-4/5 lg:w-3/5 grid grid-cols-[32px_1fr] mx-auto">
                
                <div className="row-start-1 col-start-1 w-8 flex justify-center">
                    <div 
                        className="h-full w-0.5 bg-muted" 
                    >
                        <motion.div className='origin-top size-full bg-foreground' style={{ scaleY }} />
                    </div>
                </div>

                <div className="row-start-1 col-start-1 col-span-2 space-y-16">
                    {
                        EXPERIENCE_HISTORY.map((experience) => (
                            <div 
                                key={experience.id} 
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="p-px w-8 aspect-square bg-background self-start flex justify-center items-center relative z-[2]">
                                        <experience.icon className='size-4' />
                                    </div>
                                    <div className='flex gap-2 items-center flex-1 justify-between flex-wrap'>
                                        <h3 className="text-xl font-bold uppercase">{experience.title}</h3>
                                        <p className="uppercase font-medium">{experience.company}</p>
                                        <p className="text-muted-foreground ml-auto">{experience.periode}</p>
                                    </div>
                                </div>
                                
                                <div className="ml-10">
                                    <p className="text-muted-foreground">{experience.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}