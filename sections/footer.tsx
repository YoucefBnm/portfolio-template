import { Logo } from "@/components/logo";
import { MarqueeContainer } from "@/components/marquee-container";

const SOCIAL_LINKS = [
  {
    id: 'social-link-github',
    label: 'Github',
    link: 'https://github.com/',
  },
  {
    id: 'social-link-linkedin',
    label: 'linkedin',
    link: 'https://www.linkedin.com/in/ycf-dev/',
  },
  {
    id: 'social-link-twitter',
    label: 'x',
    link: 'https://twitter.com/',
  },
  {
    id: 'social-link-instagram',
    label: 'instagram',
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-link-dribbble',
    label: 'dribbble',
    link: 'https://dribbble.com/',
  },
]

export function Footer () {
    return (
        <footer className="pt-16 pb-8">
             <MarqueeContainer baseVelocity={2}>
                <h1 className="mx-2 text-5xl md:text-7xl lg:text-8xl font-bold uppercase">my small village and I thank you for your visit</h1>
            </MarqueeContainer>
           
           <div className="mt-6 text-center">
                <a  href="mailto:mymail@mail.com" className="w-fit rounded-full ring ring-ring/50 py-1.5 px-4 text-xl font-bold tracking-tight uppercase">
                    mymail@mail.com
                </a>
           </div>

           <nav className="flex items-center justify-between mt-16 pb-2 mx-8 border-b border-border">
               <ul className="flex flex-wrap">
                {
                    SOCIAL_LINKS.map((socialLink) => (
                        <a 
                            key={socialLink.id} 
                            href={socialLink.link} 
                            className="mx-2 text-sm font-bold tracking-tight uppercase"
                        >
                            {socialLink.label}
                        </a>
                    ))
                }
               </ul>

               <Logo />
           </nav>
                
           <div className="py-4 text-right px-8">
               <p className="text-sm uppercase font-semibold text-muted-foreground">© 2025 created by <a className="text-foreground" target="_blank" href="https://x.com/lbnm_yussef">Youcef Bnm</a>{" "} made with <a target="_blank" href="https://systaliko-ui.vercel.app/">systaliko ui</a></p>
           </div>
        </footer>
    )
}