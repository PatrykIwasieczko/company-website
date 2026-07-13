import { siteContent } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const { company, owner } = siteContent;

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="text-sm font-medium text-muted-foreground">
          {owner.role}
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          <span className="text-foreground">{company.tagline}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {company.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className={cn(
              buttonVariants({ size: "lg" }),
              "shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary),transparent_65%),0_0_32px_color-mix(in_oklch,var(--primary),transparent_78%)]"
            )}
          >
            View projects
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-border/70 bg-background/30 hover:bg-background/45"
            )}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
