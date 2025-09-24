'use client'

import * as React from 'react'
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'motion/react'
import { cn } from '@/lib/utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TextVelocity ({offset=['start start', 'end start'],children,className, ...props}: React.ComponentProps<'div'> & { offset?: any}) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: offset,
    })

    const scrollVelocity = useVelocity(scrollYProgress)
    // const smoothVelocity = useSpring(scrollVelocity, {
    //     damping: 50,
    //     stiffness: 400
    // })

    // const skewVelocity = useTransform(smoothVelocity, [-1, 1], ["45deg", '-45deg'])
    const skewVelocity = useTransform(scrollVelocity, [-1, 1], ["45deg", '-45deg'])

    const x = useTransform(scrollYProgress, [0, 1], [0, -3000])
    // const smoothX = useSpring(x, {
    //     mass: 3,
    //     stiffness: 400,
    //     damping: 50
    // })
    const y = useTransform(scrollYProgress, [0, 1], [0, 320])
    // const smoothY = useSpring(y, {
    //     mass: 3,
    //     stiffness: 400,
    //     damping: 50
    // })
    return (
        <div 
            ref={containerRef}
            className={cn('relative', className)}
            {...props}
        >
            <motion.div 
                className='w-full min-h-[50vh] place-content-center'
                style={{y}}
            >
                <motion.p 
                    className='origin-bottom-left whitespace-nowrap text-7xl font-bold uppercase leading-none md:text-9xl text-foreground'
                    style={{
                        skewX: skewVelocity,
                        x
                    }}
                >
                    {children}
                </motion.p>
            </motion.div>
            
            <div className=" h-80" />
        </div>
    )
}