import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "flowbit",
    name: "Flowbit",
    shortDescription:
      "Custom interval timers for the gym, stretching routines, and any work that runs in repeating cycles.",
    fullDescription:
      "Flowbit is a focused timer app built for people who work in intervals — whether you are lifting at the gym, holding stretches, doing HIIT rounds, or breaking any repetitive task into timed blocks. Set up work and rest periods, save your favourite routines, and let the app keep the rhythm so you can stay in the zone. No clutter, no distractions — just clear timing when repetition matters.",
    image: "/projects/flowbit.svg",
    imageAlt: "Flowbit app preview",
    tags: ["Android", "Timers", "Fitness"],
    status: "in-development",
  },
  {
    slug: "no-wez-zgadnij",
    name: "No weź zgadnij",
    shortDescription:
      "A party guessing game where vague clues, wild interpretations, and group chaos make every round unpredictable.",
    fullDescription:
      "No weź zgadnij is a social guessing game made for evenings with friends. One player gives clues — often vague, often ridiculous — and everyone else races to figure out the answer before time runs out. The fun is in the miscommunication: half-understood hints, confident wrong guesses, and the moments when someone shouts the answer nobody saw coming. Easy to pick up, loud to play, and different every time you gather a group.",
    image: "/projects/no-wez-zgadnij.svg",
    imageAlt: "No weź zgadnij app preview",
    tags: ["Android", "Party game", "Multiplayer"],
    status: "in-development",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
