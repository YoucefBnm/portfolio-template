"use client";
import {
  CardsStackContainer,
  CardSticky,
} from "@/components/systaliko-ui/cards-stack";
import { Badge } from "@/components/ui/badge";
import { Project, PROJECTS } from "@/data/constants";
import Image from "next/image";
import {
  CustomCursor,
  CustomCursorProvider,
  useCustomCursor,
} from "../systaliko-ui/custom-cursor";
import { motion } from "motion/react";
import { SectionTitle } from "../section-title";

function CustomCursorChildren({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
      }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-min text-center p-2 aspect-square text-sm font-medium bg-primary text-primary-foreground rounded-full "
    >
      {children}
    </motion.div>
  );
}

function ProjectCard(project: Project) {
  const { setCursorChildren, containerRef } = useCustomCursor();
  const handleClearCursor = () => {
    setCursorChildren(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative max-w-5xl mx-auto  bg-card text-card-foreground border"
    >
      <CustomCursor />
      <div
        className="flex gap-8 flex-wrap"
        onMouseEnter={() =>
          setCursorChildren(
            <CustomCursorChildren>
              <span>view project</span>
            </CustomCursorChildren>,
          )
        }
        onMouseLeave={handleClearCursor}
      >
        <div className="md:flex-1 flex flex-col justify-evenly gap-4 p-6">
          <div className="space-y-6">
            <p className="text-xs font-medium text-muted-foreground">
              {project.year}
            </p>
            <p className="text-xs font-medium text-primary">{project.client}</p>

            <h3 className="text-2xl font-medium text-balance">
              {project.title}
            </h3>

            <div className="flex gap-2">
              {project.services.map((service) => (
                <Badge key={service} variant="outline" className="rounded-full">
                  {service}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-sm text-balance">{project.solution}</p>
        </div>

        <Image
          className="flex-1 object-cover"
          src={project.imageUrl}
          alt={project.client}
          width={657}
          height={552}
          quality={75}
          sizes="(max-width: 768px) 100vw, 657px"
          priority
        />
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section className="pb-16 space-y-8">
      <SectionTitle>Selected work</SectionTitle>

      <CardsStackContainer className="px-8 flex flex-col gap-16">
        {PROJECTS.map((project) => (
          <CardSticky key={project.id}>
            <CustomCursorProvider>
              <ProjectCard {...project} />
            </CustomCursorProvider>
          </CardSticky>
        ))}
      </CardsStackContainer>
    </section>
  );
}
