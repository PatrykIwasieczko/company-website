export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  status: "live" | "in-development" | "coming-soon";
  links?: {
    website?: string;
    playStore?: string;
    appStore?: string;
    github?: string;
  };
};

export type SiteContent = {
  company: {
    name: string;
    tagline: string;
    description: string;
  };
  owner: {
    name: string;
    role: string;
    bio: string;
    email: string;
    location: string;
  };
  navigation: NavItem[];
  about: {
    heading: string;
    paragraphs: string[];
    highlights: string[];
  };
  projects: {
    heading: string;
    description: string;
    items: Project[];
  };
  contact: {
    heading: string;
    description: string;
  };
  footer: {
    copyright: string;
  };
};
