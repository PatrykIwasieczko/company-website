import { siteContent } from "@/content/site";
import { Badge } from "@/components/ui/badge";

export function About() {
  const { about, owner } = siteContent;

  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="section-heading text-3xl font-semibold tracking-tight">
          {about.heading}
        </h2>
        <p className="mt-2 text-muted-foreground">{owner.name}</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Focus areas
            </h3>
            <ul className="mt-4 space-y-3">
              {about.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          <Badge variant="secondary">{owner.location}</Badge>
          <Badge variant="outline">Google Play: {owner.googlePlayName}</Badge>
        </div>
      </div>
    </section>
  );
}
