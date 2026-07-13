import type { Project } from "@/content/types";
import { siteContent } from "@/content/site";
import { Badge } from "@/components/ui/badge";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const statusLabels: Record<Project["status"], string> = {
  live: "Live",
  "in-development": "In development",
  "coming-soon": "Coming soon",
};

const statusVariants: Record<
  Project["status"],
  "default" | "secondary" | "outline"
> = {
  live: "default",
  "in-development": "secondary",
  "coming-soon": "outline",
};

function ProjectCard({ project }: { project: Project }) {
  const links = project.links ?? {};

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle>{project.name}</CardTitle>
          <Badge variant={statusVariants[project.status]}>
            {statusLabels[project.status]}
          </Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      {Object.keys(links).length > 0 && (
        <CardFooter className="gap-2">
          {links.playStore && (
            <a
              href={links.playStore}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Google Play
            </a>
          )}
          {links.website && (
            <a
              href={links.website}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              Website
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              GitHub
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
}

export function Projects() {
  const { projects } = siteContent;

  return (
    <section id="projects" className="scroll-mt-16 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">
          {projects.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {projects.description}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
