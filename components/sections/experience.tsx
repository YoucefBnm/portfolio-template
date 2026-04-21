import { SectionTitle } from "../section-title";
import { EXPERIENCE_HISTORY, ExperienceT } from "@/data/constants";
import {
  Timeline,
  TimelineCard,
  TimelineProgress,
} from "../systaliko-ui/timeline";

export function ExperienceCard({ experience }: { experience: ExperienceT }) {
  return (
    <div className="bg-card text-card-foreground border p-6 space-y-6">
      <div className="flex gap-2 items-center justify-between flex-wrap">
        <h3 className="font-medium text-balance">{experience.title}</h3>
        <p className="text-xs font-medium text-primary uppercase">
          {experience.company}
        </p>
        <p className="text-muted-foreground">{experience.periode}</p>
      </div>

      <p className="text-muted-foreground text-sm text-balance">
        {experience.description}
      </p>
    </div>
  );
}

export function Experience() {
  return (
    <section className="overflow-hidden pb-16 space-y-8">
      <SectionTitle>Experience history</SectionTitle>

      <Timeline className="flex justify-center gap-8 md:block relative max-w-5xl mx-auto px-6">
        <TimelineProgress className="md:absolute top-0 md:left-1/2 md:-translate-x-1/2 bottom-0" />

        <div className="space-y-20">
          {EXPERIENCE_HISTORY.map((experience) => (
            <TimelineCard
              key={experience.id}
              className="grid md:even:*:col-start-2 md:grid-cols-2 gap-16"
            >
              <ExperienceCard experience={experience} />
            </TimelineCard>
          ))}
        </div>
      </Timeline>
    </section>
  );
}
