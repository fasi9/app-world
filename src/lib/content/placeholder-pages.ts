export interface PlaceholderPage {
  slug: string;
  title: string;
  note: string;
}

/**
 * Honest "not built yet" stand-ins for every route the site links to that
 * isn't part of Phase 1 (brief section 16). Each gets replaced by a real,
 * individually written page in Phase 3 — this only exists so header/footer
 * links aren't dead during the Phase 1 review.
 */
export const placeholderPages: PlaceholderPage[] = [
  { slug: "services", title: "Services", note: "A full overview of everything we do." },
  { slug: "services/ai-development", title: "AI Development", note: "Custom AI development and assistants." },
  {
    slug: "services/ai-automation-support",
    title: "AI Automation & Support",
    note: "Workflow automation, integrations, and ongoing AI support.",
  },
  { slug: "services/web-development", title: "Web Development", note: "Business websites and web applications." },
  {
    slug: "services/ecommerce-development",
    title: "E-commerce Development",
    note: "Online stores built to convert and stay maintainable.",
  },
  {
    slug: "services/graphic-design-branding",
    title: "Graphic Design & Branding",
    note: "Identity, graphic design, and brand systems.",
  },
  { slug: "services/ui-ux-design", title: "UI/UX Design", note: "Interfaces and prototypes people can actually use." },
  { slug: "services/digital-marketing", title: "Digital Marketing", note: "Campaigns and channels that reach the right customers." },
  { slug: "services/seo-content", title: "SEO & Content", note: "Content and search visibility work." },
  {
    slug: "services/social-media-management",
    title: "Social Media Management",
    note: "Ongoing social presence and content management.",
  },
  {
    slug: "services/qa-software-testing",
    title: "QA & Software Testing",
    note: "Manual and automated testing for software you already have.",
  },
  { slug: "about", title: "About", note: "Who we are and how we work." },
  { slug: "contact", title: "Contact", note: "Start a project with us." },
  { slug: "audit", title: "Free Audit", note: "Request a free audit of your current site or software." },
  { slug: "process", title: "Our Process", note: "How a project with us actually runs." },
  { slug: "engagement-options", title: "Engagement Options", note: "Launch, Grow, and Automate — how to work with us." },
  { slug: "insights", title: "Insights", note: "Articles and write-ups from the team." },
  { slug: "faq", title: "FAQ", note: "Answers to common questions." },
  { slug: "privacy", title: "Privacy", note: "How we handle the data our forms and analytics collect." },
];

export function getPlaceholderPage(slug: string): PlaceholderPage | undefined {
  return placeholderPages.find((p) => p.slug === slug);
}
