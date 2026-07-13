import Link from "next/link";

import { siteContent } from "@/content/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const { footer, company, owner } = siteContent;

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium">{company.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {owner.email}
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <a
              href={`mailto:${owner.email}`}
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
          </nav>
        </div>

        <Separator className="my-6" />

        <p className="text-sm text-muted-foreground">{footer.copyright}</p>
      </div>
    </footer>
  );
}
