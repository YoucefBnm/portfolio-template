'use client'
import * as React from 'react'
import { HTMLMotionProps, motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from 'motion/react'
import { cn } from '@/lib/utils'

interface MarqueeContainerProps extends HTMLMotionProps<'div'> {
    baseVelocity?: number
}
export function MarqueeContainer ({baseVelocity=8, className, children,style, ...props}: React.ComponentProps<'div'> & MarqueeContainerProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

    const directionFactor = React.useRef<number>(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        if(velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    return (
        <motion.div
      className={cn(
        "overflow-hidden whitespace-nowrap flex flex-nowrap ",
        className
      )}
      {...props}
    >
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x, ...style }}>
        <div>{children}</div>&nbsp;
        <div>{children}</div>&nbsp;
        <div>{children}</div>&nbsp;
        <div>{children}</div>&nbsp;
      </motion.div>
    </motion.div>
    )
}