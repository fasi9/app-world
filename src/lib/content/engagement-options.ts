export interface EngagementOption {
  id: string;
  name: string;
  summary: string;
  includes: string[];
}

/** Brief section 10. No prices — every option ends in "Request a Proposal". */
export const engagementOptions: EngagementOption[] = [
  {
    id: "launch",
    name: "Launch",
    summary: "For businesses starting fresh — a brand, a website, and a social presence built together.",
    includes: ["Brand essentials", "Website", "Social setup"],
  },
  {
    id: "grow",
    name: "Grow",
    summary: "For businesses with a foundation already, that need it to work harder for them.",
    includes: ["Website improvement", "Marketing", "Content", "Social support"],
  },
  {
    id: "automate",
    name: "Automate",
    summary: "For businesses ready to take manual work off their plate with AI.",
    includes: ["Workflow discovery", "AI integration", "Testing", "Support"],
  },
];
