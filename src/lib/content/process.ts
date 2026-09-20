export interface ProcessStep {
  number: string;
  name: string;
  description: string;
}

/** Brief section 9.6 / 16 concept: Discover → Plan → Design & Build → Test → Launch & Improve. */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Discover",
    description:
      "We start with your business, not a template — who you serve, what's slowing you down, and what success actually looks like.",
  },
  {
    number: "02",
    name: "Plan",
    description:
      "A clear scope and plan before anything gets built, so you know what you're getting and when.",
  },
  {
    number: "03",
    name: "Design & Build",
    description: "Design and development happen together, with regular check-ins instead of a single reveal at the end.",
  },
  {
    number: "04",
    name: "Test",
    description:
      "Everything gets tested — functionality, usability, cross-browser, mobile — before it ever reaches your customers.",
  },
  {
    number: "05",
    name: "Launch & Improve",
    description: "We launch, then keep watching how it performs and improving it with you.",
  },
];
