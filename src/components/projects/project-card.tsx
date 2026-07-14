import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden border-border/60 bg-card transition-colors hover:border-primary/50">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted/30">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="group-hover:underline">
              {project.name}
            </CardTitle>
            <Badge variant={statusVariants[project.status]}>
              {statusLabels[project.status]}
            </Badge>
          </div>
          <CardDescription>{project.shortDescription}</CardDescription>
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
      </Card>
    </Link>
  );
}
