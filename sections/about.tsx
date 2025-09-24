import { TextStaggerInview } from "@/components/systaliko-ui/text/text-stagger-inview";
import { ANIMATION_VARIANTS } from "@/components/systaliko-ui/utils/animation-variants";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import * as motion from "motion/react-client";

export function About () {
    const animationVaiants = ANIMATION_VARIANTS['bottom']
    return (
        <section className="px-12 place-content-center min-h-screen">
            <div className="md:w-4/5 lg:3/5 text-center mx-auto space-y-6">
                <TextStaggerInview 
                    stagger={0.005} 
                    animation="left" 
                    className={`
                        text-2xl items-center font-bold uppercase 
                        [&>[data-word=Designer]]:inline-flex [&>[data-word=Designer]]:items-center [&>[data-word=Designer]]:after:inline-block [&>[data-word=Designer]]:after:size-8
                        [&>[data-word=Designer]]:after:bg-[url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                        [&>[data-word=Designer]]:after:bg-cover [&>[data-word=Designer]]:after:bg-center [&>[data-word=Designer]]:after:rounded-full [&>[data-word=Designer]]:after:ml-2    

                        [&>[data-word=experience]]:inline-flex [&>[data-word=experience]]:items-center [&>[data-word=experience]]:after:inline-block [&>[data-word=experience]]:after:size-8
                        [&>[data-word=experience]]:after:bg-[url('https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                        [&>[data-word=experience]]:after:bg-cover [&>[data-word=experience]]:after:bg-center [&>[data-word=experience]]:after:rounded-full [&>[data-word=experience]]:after:ml-2    

                    `} 
                    as="h3"
                >
                    They call me D&D, one d for dev and the other for design, I love to explore new technologies and create innovative solutions, 
                    always looking for ways to improve and enhance the user experience
                </TextStaggerInview>

                <motion.div 
                    transition={{ delay: 0.3, duration: 0.3, ease: 'easeInOut' }}
                    variants={animationVaiants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Button className="font-bold">
                        View my work <ArrowRightIcon />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}