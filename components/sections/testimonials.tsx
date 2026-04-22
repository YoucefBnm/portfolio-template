import { TESTIMONIALS } from "@/data";
import { SectionTitle } from "../section-title";
import { TestimonialT } from "@/types";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function TestimonialCard({ testimonial }: { testimonial: TestimonialT }) {
  return (
    <div className="p-8 bg-background place-content-end">
      <blockquote
        className="text-muted-foreground text-balance"
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
          <p className="text-muted-foreground text-xs">
            {testimonial.jobTitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="pb-16 space-y-8">
      <SectionTitle>Gossip</SectionTitle>
      <div className="px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-px bg-border/50 border">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
