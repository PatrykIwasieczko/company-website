import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  company: {
    name: "Your Company Name",
    tagline: "Building thoughtful digital products",
    description:
      "Independent software studio focused on mobile and web applications that solve real problems.",
  },
  owner: {
    name: "Your Name",
    role: "Founder & Software Developer",
    bio: "Software developer with a passion for crafting clean, user-friendly applications. I build and ship commercial products across mobile and web platforms.",
    email: "hello@example.com",
    location: "Poland",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    heading: "About",
    paragraphs: [
      "I'm an independent developer building commercial software products. My focus is on practical tools that are simple to use and reliable in production.",
      "This site showcases my active and upcoming projects. Each product is designed, developed, and maintained end-to-end — from initial concept through release and ongoing updates.",
    ],
    highlights: [
      "Mobile app development (Android & cross-platform)",
      "Web applications with modern React stacks",
      "End-to-end product design and delivery",
      "Privacy-first, maintainable architecture",
    ],
  },
  projects: {
    heading: "Commercial Projects",
    description:
      "A selection of products I'm building and maintaining. More projects will be added as they launch.",
    items: [
      {
        id: "project-alpha",
        name: "Project Alpha",
        description:
          "A productivity app that helps users organize daily tasks with a minimal, distraction-free interface.",
        tags: ["Android", "React Native", "Productivity"],
        status: "live",
        links: {
          playStore: "#",
          website: "#",
        },
      },
      {
        id: "project-beta",
        name: "Project Beta",
        description:
          "A utility tool for tracking personal finances with simple charts and export options.",
        tags: ["Android", "Kotlin", "Finance"],
        status: "in-development",
        links: {
          github: "#",
        },
      },
      {
        id: "project-gamma",
        name: "Project Gamma",
        description:
          "A companion web dashboard for managing settings and data across mobile apps.",
        tags: ["Next.js", "TypeScript", "Web"],
        status: "coming-soon",
      },
    ],
  },
  contact: {
    heading: "Contact",
    description:
      "Have a question about my products or want to get in touch? Send me an email — I typically respond within a few business days.",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Your Company Name. All rights reserved.`,
  },
};
