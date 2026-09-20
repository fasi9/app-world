export interface ConceptProject {
  slug: string;
  title: string;
  category: string;
  summary: string;
  brief: string;
  designDecisions: string[];
  intendedBenefits: string[];
}

/**
 * Brief section 12: honestly labeled Concept Projects, used while real
 * client work isn't yet available to show. No invented outcomes or metrics.
 */
export const conceptProjects: ConceptProject[] = [
  {
    slug: "ai-customer-support-assistant",
    title: "AI Customer Support Assistant",
    category: "AI & Automation",
    summary: "A concept for an assistant that handles first-line support questions and hands off cleanly when it can't help.",
    brief:
      "Small support teams spend a lot of their day answering the same handful of questions. This concept explores an assistant trained on a business's own docs and policies that can answer those directly, and recognizes the point where a real person needs to step in.",
    designDecisions: [
      "Answers are grounded only in the business's own source material — no invented policies or prices.",
      "A visible handoff moment when the assistant is unsure, rather than guessing.",
      "Conversation history carries over to the human agent so customers don't repeat themselves.",
    ],
    intendedBenefits: [
      "Less time spent on repetitive questions",
      "Faster first response for customers",
      "A clear, honest limit on what the assistant will attempt on its own",
    ],
  },
  {
    slug: "service-business-website",
    title: "Service Business Website",
    category: "Web & Software",
    summary: "A concept site for a local service business built around getting the phone to ring.",
    brief:
      "Many local service businesses have a website that looks fine but doesn't actually generate enquiries. This concept is built around one job: make it obvious what the business does, who it's for, and how to get in touch, in the fewest steps possible.",
    designDecisions: [
      "Contact options above the fold on every page, not buried in a footer.",
      "Service pages written for the specific jobs customers search for, instead of one generic 'services' page.",
      "Built mobile-first, since most local search happens on a phone.",
    ],
    intendedBenefits: [
      "A site visitors can act on quickly",
      "Clearer service pages for search visibility",
      "A structure that's easy to keep updated",
    ],
  },
  {
    slug: "ecommerce-ux-redesign",
    title: "E-commerce UX Redesign",
    category: "Brand & Experience",
    summary: "A concept redesign of a cluttered product and checkout flow.",
    brief:
      "A common pattern in small e-commerce stores: too many steps between browsing and buying, and a checkout that asks for more than it needs. This concept simplifies the path from product page to confirmed order.",
    designDecisions: [
      "Fewer, clearer steps from cart to confirmation.",
      "Product information organized around the questions shoppers actually ask before buying.",
      "Consistent layout and design system across product, cart, and checkout instead of three different patterns.",
    ],
    intendedBenefits: [
      "A shorter, clearer path to checkout",
      "Less friction for first-time buyers",
      "A design system that's easier to extend to new products",
    ],
  },
];
