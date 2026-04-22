import { Logo } from "@/components/logo";
import { MarqueeContainer } from "@/components/marquee-container";
import { SOCIAL_LINKS } from "@/data";

function Socials() {
  return (
    <ul className="list-none flex flex-wrap bg-primary py-px gap-px">
      {SOCIAL_LINKS.map((social) => (
        <li
          key={social.id}
          className="flex-1 hover:bg-popover hover:text-popover-foreground gap-2 bg-foreground  capitalize font-medium"
        >
          <a
            href={social.link}
            target="_blank"
            className="p-4 flex justify-center items-center"
          >
            {social.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <MarqueeContainer
        baseVelocity={2}
        className="relative z-2 items-center h-34 bg-foreground"
      >
        <h1 className="mx-2 text-3xl text-muted-foreground md:text-4xl lg:text-5xl font-medium tracking-wide uppercase">
          my small village thank you for your visit{" "}
        </h1>
      </MarqueeContainer>

      <div className="sticky z-0 bottom-0 left-0 w-full h-fit">
        <Socials />
      </div>

      <div className="flex p-6 justify-center items-center">
        <small>
          &copy; 2026 created by{" "}
          <a
            href="https://x.com/lbnm_yussef"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youcef Bnm
          </a>
        </small>
        .
      </div>
    </footer>
  );
}
