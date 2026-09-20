export interface NavItem {
  label: string;
  href: string;
}

/** Primary header navigation. Audit and booking are CTAs, not nav items — see brief section 4. */
export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Services",
    items: [
      { label: "AI Development", href: "/services/ai-development" },
      { label: "AI Automation & Support", href: "/services/ai-automation-support" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "E-commerce Development", href: "/services/ecommerce-development" },
      { label: "Graphic Design & Branding", href: "/services/graphic-design-branding" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "SEO & Content", href: "/services/seo-content" },
      { label: "Social Media Management", href: "/services/social-media-management" },
      { label: "QA & Software Testing", href: "/services/qa-software-testing" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Engagement Options", href: "/engagement-options" },
      { label: "Insights", href: "/insights" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Start a project",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Free Audit", href: "/audit" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];
