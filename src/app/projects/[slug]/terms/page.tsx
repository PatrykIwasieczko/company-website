import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { getAllProjectSlugs, getProjectBySlug } from "@/content/projects";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

type LegalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LegalPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Terms of Service" };
  }

  return {
    title: `${project.name} Terms of Service`,
    description: `Terms of service for the ${project.name} app.`,
  };
}

export default async function ProjectTermsPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { company, owner } = siteContent;
  const lastUpdated = "July 13, 2026";

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <Link
        href={`/projects/${project.slug}`}
        className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-8")}
      >
        ← Back to {project.name}
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight">
        {project.name} — Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {lastUpdated}
      </p>

      <div className="mt-10 space-y-6 text-muted-foreground">
        <p>
          These terms govern your use of the {project.name} application provided
          by {company.name}. By downloading or using the app, you agree to these
          terms.
        </p>

        <section>
          <h2 className="text-xl font-medium text-foreground">Use of the app</h2>
          <p className="mt-3 leading-relaxed">
            You may use {project.name} for personal, non-commercial purposes
            unless otherwise stated. You agree not to misuse the app, attempt to
            reverse engineer it, or use it in any way that violates applicable
            laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-foreground">
            Disclaimer
          </h2>
          <p className="mt-3 leading-relaxed">
            {project.name} is provided &quot;as is&quot; without warranties of
            any kind. We do not guarantee uninterrupted or error-free operation.
            Use the app at your own discretion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-foreground">
            Changes to these terms
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update these terms from time to time. Continued use of{" "}
            {project.name} after changes are published constitutes acceptance of
            the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-foreground">Contact</h2>
          <p className="mt-3 leading-relaxed">
            For questions about these terms, contact{" "}
            <a
              href={`mailto:${owner.email}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {owner.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
