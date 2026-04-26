import { Logo } from "@/components/logo";
import { MarqueeContainer } from "@/components/marquee-container";
import { SOCIAL_LINKS } from "@/data";
import { TextStaggerInview } from "../systaliko-ui/text-stagger-inview";
import { Badge } from "../ui/badge";
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from "../systaliko-ui/text-stagger-hover";
import { Separator } from "../ui/separator";

function Socials() {
  return (
    <div className="space-y-4">
      <TextStaggerInview
        className="text-xl font-medium inline-block"
        staggerStart={"center"}
        animation="left"
      >
        Follow me
      </TextStaggerInview>
      <ul className="flex flex-wrap gap-2 justify-start items-start">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label}>
            <Badge variant="outline" className="rounded-full">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium capitalize"
              >
                <TextStaggerHover>
                  <TextStaggerHoverActive
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    animation={"bottom"}
                    className="text-stone-100 opacity-70"
                  >
                    {link.label}
                  </TextStaggerHoverActive>
                  <TextStaggerHoverHidden
                    className="text-stone-50"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    animation={"bottom"}
                  >
                    {link.label}
                  </TextStaggerHoverHidden>
                </TextStaggerHover>
              </a>
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Mail() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start text-xl font-medium">
        <TextStaggerInview staggerStart={"center"} animation="left">
          Have a project, idea in mind ?
        </TextStaggerInview>
        <TextStaggerInview staggerStart={"center"} animation="left">
          Drop a message
        </TextStaggerInview>
      </div>

      <div>
        <Badge className="rounded-full">
          <a
            href="mailto:someone@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium capitalize"
          >
            <TextStaggerHover>
              <TextStaggerHoverActive
                transition={{ duration: 0.2, ease: "easeOut" }}
                animation={"bottom"}
                className="opacity-70"
              >
                dontcontact@mail.com
              </TextStaggerHoverActive>
              <TextStaggerHoverHidden
                transition={{ duration: 0.2, ease: "easeOut" }}
                animation={"bottom"}
              >
                dontcontact@mail.com
              </TextStaggerHoverHidden>
            </TextStaggerHover>
          </a>
        </Badge>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-50 ">
      <div className="flex flex-wrap justify-between items-end gap-8 p-12">
        <Mail />
        <Socials />
      </div>

      <Separator className="my-6 bg-stone-700" />
      <MarqueeContainer baseVelocity={1} className="py-4">
        <h1 className="mx-2 text-3xl opacity-70 md:text-4xl lg:text-5xl font-bold uppercase">
          my small village thank you for your visit{" "}
        </h1>
      </MarqueeContainer>

      <div className="p-4 flex justify-center items-cnter">
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
      </div>
    </footer>
  );
}
