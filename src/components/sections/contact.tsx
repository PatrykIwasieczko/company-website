import { siteContent } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() {
  const { contact, owner } = siteContent;

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="section-heading text-3xl font-semibold tracking-tight">
          {contact.heading}
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {contact.description}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`mailto:${owner.email}`}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {owner.email}
          </a>
          <p className="text-sm text-muted-foreground">{owner.location}</p>
        </div>
      </div>
    </section>
  );
}
