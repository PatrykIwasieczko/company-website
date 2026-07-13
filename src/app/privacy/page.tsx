import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteContent.company.name} products and website.`,
};

export default function PrivacyPage() {
  const { company, owner } = siteContent;
  const lastUpdated = "July 13, 2026";

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-8")}
      >
        ← Back to home
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {lastUpdated}
      </p>

      <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-muted-foreground dark:prose-invert">
        <p>
          This privacy policy describes how {company.name} (&quot;we&quot;,
          &quot;us&quot;) collects, uses, and protects information when you use
          our website and mobile applications.
        </p>

        <section>
          <h2 className="text-xl font-medium text-foreground">
            Information we collect
          </h2>
          <p className="mt-3">
            The specific data collected depends on each product. Generally, we
            aim to collect only what is necessary to provide and improve our
            services. Replace this section with details specific to your apps.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-foreground">
            How we use information
          </h2>
          <p className="mt-3">
            We use collected information to operate our products, respond to
            support requests, fix bugs, and improve user experience. We do not
            sell personal data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-foreground">Contact</h2>
          <p className="mt-3">
            For privacy-related questions, contact us at{" "}
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
