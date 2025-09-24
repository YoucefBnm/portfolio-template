import { CardsStackContainer, CardSticky } from "@/components/systaliko-ui/cards/cards-stack"
import { TextStaggerInview } from "@/components/systaliko-ui/text/text-stagger-inview"
import { Button } from "@/components/ui/button"

const PROJECTS = [
    {
        id: 'project-veo',
        title: 'Veo Agency',
        services: ['Branding','Marketing strategy', 'UI/UX Design', 'Development'],
        description: 'The Veo website is a modern and user-friendly platform for creating and managing your online business. It offers a range of features and tools to help you streamline your operations and enhance your customer experience.',
        imageUrl: 'https://systaliko-ui.vercel.app/videos/veo-preview.png',
        videoUrl: 'https://systaliko-ui.vercel.app/videos/veo-preview.mp4',
        link: 'https://veo-agency-template.vercel.app/'
    },
    {
        id: 'project-abla',
        title: 'Abla Studio',
        services: ['Branding', 'SEO',  'UI/UX Design', 'Development'],
        description: 'Abla Studio is a modern and user-friendly platform for creating and managing your online business. It offers a range of features and tools to help you streamline your operations and enhance your customer experience.',
        imageUrl: 'https://systaliko-ui.vercel.app/videos/abla-preview.png',
        videoUrl: 'https://systaliko-ui.vercel.app/videos/abla-preview.mp4',
        link: 'https://abla-studio-template.vercel.app/'
    }
]

export function Work () {
    return (
        <section className="pt-12">
            <div className="px-6 mb-8 text-center">
                <TextStaggerInview viewport={{ amount: 'all', once: true }} as={'h2'} animation='left' className="text-4xl font-bold tracking-tight uppercase">
                    my crafted projects
                </TextStaggerInview>
            </div>
            <CardsStackContainer className="px-6 min-h-[220vh] space-y-8 ">
                {
                    PROJECTS.map((project, index) => 
                        <CardSticky 
                            transition={{ ease: 'easeInOut'}} 
                            className="w-full lg:w-max bg-card border-t border-t-border mx-auto" 
                            key={project.id} 
                            index={index}
                            incrementY={49}
                            incrementZ={0}
                        >
                            <div className="flex flex-wrap justify-between items-center gap-4  h-12 px-4">
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-tight">{project.title}</h3>
                                </div>

                                <div className="hidden md:flex-1 md:flex justify-center gap-2">
                                    {project.services.map((service => 
                                        <span key={`${project.id}-${service}`} className="text-sm font-medium uppercase tracking-tight text-muted-foreground">
                                            {service}
                                        </span>
                                    ))}
                                </div>

                                <Button size={'sm'} variant={'outline'} className="uppercase">
                                    <a href={project.link} target='_blank' className="block">view case</a>
                                </Button>
                            </div>
                            <div className="w-full place-items-center">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    src={project.videoUrl}
                                    poster={project.imageUrl}
                                    className="h-auto max-h-[80vh] w-auto max-w-full"
                                />
  
                            </div>

                        </CardSticky>
                    )
                }
            </CardsStackContainer>
        </section>
    )
}