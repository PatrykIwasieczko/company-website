import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import {
  FlowbitPrivacyPolicy,
  flowbitPrivacyMeta,
} from "@/content/legal/flowbit-privacy";
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
    return { title: "Privacy Policy" };
  }

  if (slug === "flowbit") {
    return {
      title: flowbitPrivacyMeta.title,
      description: flowbitPrivacyMeta.description,
    };
  }

  return {
    title: `${project.name} Privacy Policy`,
    description: `Privacy policy for the ${project.name} app.`,
  };
}

export default async function ProjectPrivacyPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (slug === "flowbit") {
    return (
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <Link
          href={`/projects/${project.slug}`}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "mb-8",
          )}
        >
          ← Back to {project.name}
        </Link>

        <h1 className="text-3xl font-semibold tracking-tight">
          Privacy Policy for FlowBit
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {flowbitPrivacyMeta.lastUpdated}
        </p>

        <FlowbitPrivacyPolicy />
      </div>
    );
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
        {project.name} — Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {lastUpdated}
      </p>

      <div className="mt-10 space-y-6 text-muted-foreground">
        <p>
          This privacy policy applies to the {project.name} mobile application
          published by {company.name} (&quot;we&quot;, &quot;us&quot;). By using
          the app, you agree to the practices described below.
        </p>

        <section>
          <h2 className="text-xl font-medium text-foreground">
            Information we collect
          </h2>
          <p className="mt-3 leading-relaxed">
            {project.name} is designed to collect as little personal data as
            possible. Depending on app features, we may collect usage analytics,
            crash reports, or data you voluntarily provide (such as saved
            settings). Replace this section with specifics before publishing to
            Google Play.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-foreground">
            How we use information
          </h2>
          <p className="mt-3 leading-relaxed">
            We use collected information solely to operate, maintain, and
            improve {project.name}. We do not sell your personal data to third
            parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-foreground">
            Data retention &amp; deletion
          </h2>
          <p className="mt-3 leading-relaxed">
            Data is retained only as long as needed to provide the service or
            comply with legal obligations. You may request deletion of your data
            by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-foreground">Contact</h2>
          <p className="mt-3 leading-relaxed">
            For privacy-related questions about {project.name}, contact{" "}
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
