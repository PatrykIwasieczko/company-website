import Link from "next/link";

import { siteContent } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const { company, navigation } = siteContent;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-90"
        >
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {company.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "sm:hidden"
          )}
        >
          Contact
        </a>
      </div>
    </header>
  );
}
