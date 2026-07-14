import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getAllProjectSlugs, getProjectBySlug } from "@/content/projects";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.shortDescription,
  };
}

const statusLabels = {
  live: "Live",
  "in-development": "In development",
  "coming-soon": "Coming soon",
} as const;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <Link
        href="/#projects"
        className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-8")}
      >
        ← Back to projects
      </Link>

      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Badge variant="secondary">{statusLabels[project.status]}</Badge>
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="section-heading mt-4 text-4xl font-semibold tracking-tight">
        {project.name}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        {project.fullDescription}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.links?.playStore && (
          <a
            href={project.links.playStore}
            className={cn(buttonVariants())}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get on Google Play
          </a>
        )}
      </div>

      <div className="mt-12 rounded-xl border border-border/60 bg-muted/30 p-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Legal
        </h2>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link
            href={`/projects/${project.slug}/privacy`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href={`/projects/${project.slug}/terms`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Questions about {project.name}? Contact{" "}
          <a
            href={`mailto:${siteContent.owner.email}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            {siteContent.owner.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
