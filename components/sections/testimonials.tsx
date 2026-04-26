import { TESTIMONIALS } from "@/data";
import { SectionTitle } from "../section-title";
import { TestimonialT } from "@/types";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  ScrollAnimation,
  ScrollTranslateX,
  ScrollTranslateY,
} from "../systaliko-ui/scroll-animation";

function TestimonialCard({
  testimonial,
  arrayLength,
  index,
}: {
  testimonial: TestimonialT;
  arrayLength: number;
  index: number;
}) {
  const start = index / arrayLength;
  const end = (index + 1) / arrayLength;

  return (
    <ScrollTranslateX xRange={[1000, 0]} inputRange={[start, end]}>
      <div
        className={`w-xs aspect-square p-8 border border-border/50 backdrop-blur-xl place-content-end ${testimonial.colors}`}
      >
        <blockquote
          className=" font-medium text-balance"
          cite="https://www.404.com"
        >
          <p>"{testimonial.quote}"</p>
        </blockquote>

        <Separator className="my-6 bg-border/50 " />

        <div className="flex items-center gap-2">
          <Avatar className="size-10">
            <AvatarImage
              src={testimonial.avatarUrl}
              alt={`Portrait of ${testimonial.author}`}
            />
            <AvatarFallback>
              {testimonial.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm font-medium uppercase">
              {testimonial.author}
            </h3>
            <p className="text-xs">{testimonial.jobTitle}</p>
          </div>
        </div>
      </div>
    </ScrollTranslateX>
  );
}

export function Testimonials() {
  return (
    <section>
      <SectionTitle>Testimonials</SectionTitle>

      <ScrollAnimation
        offset={["center end", "end end"]}
        spacerClass="h-[900px]"
      >
        <ScrollTranslateY
          yRange={[0, 900]}
          className="h-screen overflow-hidden place-items-center grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1"
        >
          <div className="grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 items-center *:odd:rotate-5 *:even:-rotate-5">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
                arrayLength={TESTIMONIALS.length}
                index={index}
              />
            ))}
          </div>
        </ScrollTranslateY>
      </ScrollAnimation>
    </section>
  );
}
