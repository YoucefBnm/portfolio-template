import { SectionTitle } from "../section-title";
import { EXPERIENCE_HISTORY } from "@/data";
import {
  Timeline,
  TimelineCard,
  TimelineProgress,
} from "../systaliko-ui/timeline";
import { Badge } from "../ui/badge";
import { ExperienceT } from "@/types";

export function ExperienceCard({ experience }: { experience: ExperienceT }) {
  return (
    <div className="bg-card text-card-foreground border p-6 space-y-6">
      <div className="flex gap-2 items-center justify-between flex-wrap">
        <h3 className="font-medium text-balance">{experience.title}</h3>
        <p className="text-muted-foreground text-sm tabular-nums">
          {experience.periode}
        </p>
        <Badge variant={"outline"} className="rounded-full">
          <experience.icon className="size-3.5" />
          <p className="text-xs font-medium">{experience.company}</p>
        </Badge>
      </div>

      <p className="text-muted-foreground text-sm text-balance leading-normal">
        {experience.description}
      </p>
    </div>
  );
}

export function Experience() {
  return (
    <section className="overflow-hidden pb-16 space-y-8">
      <SectionTitle>Experience history</SectionTitle>

      <Timeline className="flex justify-center gap-6 md:block relative max-w-5xl mx-auto px-6">
        <TimelineProgress className="w-0.5 md:absolute top-0 md:left-1/2 md:-translate-x-1/2 bottom-0" />

        <div className="space-y-20">
          {EXPERIENCE_HISTORY.map((experience, index) => (
            <TimelineCard
              key={experience.id}
              className="relative not-only:grid md:even:*:col-start-2 md:grid-cols-2 gap-16"
            >
              <ExperienceCard experience={experience} />
            </TimelineCard>
          ))}
        </div>
      </Timeline>
    </section>
  );
}
