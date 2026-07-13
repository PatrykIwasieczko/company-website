import type { Project } from "@/content/types";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { siteContent } from "@/content/site";

export function Projects() {
  const { projects: projectsSection } = siteContent;

  return (
    <section id="projects" className="scroll-mt-16 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">
          {projectsSection.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {projectsSection.description}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
