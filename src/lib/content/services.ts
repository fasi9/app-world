export interface ServiceGroup {
  id: string;
  name: string;
  href: string;
  summary: string;
  deliverables: string[];
}

/** The five service groups from brief section 2, AI & Automation first. */
export const serviceGroups: ServiceGroup[] = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    href: "/services/ai-automation-support",
    summary:
      "Custom AI built around how your business actually runs, so it takes real work off your plate.",
    deliverables: [
      "Custom AI development",
      "Assistants & chatbots",
      "Workflow automation",
      "Integrations",
      "Ongoing AI support",
    ],
  },
  {
    id: "web-software",
    name: "Web & Software",
    href: "/services/web-development",
    summary: "A site or application built to hold up under real traffic, not just look good in a demo.",
    deliverables: [
      "Business websites",
      "Web applications",
      "E-commerce",
      "Maintenance",
      "Support",
    ],
  },
  {
    id: "brand-experience",
    name: "Brand & Experience",
    href: "/services/ui-ux-design",
    summary: "Design that makes your business easier to trust and easier to use, from first click onward.",
    deliverables: [
      "Graphic design",
      "Branding",
      "UI/UX",
      "Prototypes",
      "Design systems",
    ],
  },
  {
    id: "marketing-social",
    name: "Marketing & Social",
    href: "/services/digital-marketing",
    summary: "Getting found by the people already looking for what you do, and staying visible after.",
    deliverables: [
      "Digital marketing",
      "SEO",
      "Content",
      "Paid campaigns",
      "Social media management",
    ],
  },
  {
    id: "quality-assurance",
    name: "Quality Assurance",
    href: "/services/qa-software-testing",
    summary: "Every build gets tested the way a QA engineer would test it, before it reaches your customers.",
    deliverables: [
      "Manual testing",
      "Automated testing",
      "Usability testing",
      "Cross-browser testing",
      "Mobile compatibility",
    ],
  },
];
