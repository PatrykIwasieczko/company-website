export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  tags: string[];
  status: "live" | "in-development" | "coming-soon";
  links?: {
    playStore?: string;
    appStore?: string;
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
  };
  contact: {
    heading: string;
    description: string;
  };
  footer: {
    copyright: string;
  };
};
