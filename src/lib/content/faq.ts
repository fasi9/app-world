export interface FaqItem {
  question: string;
  answer: string;
}

export const homepageFaqs: FaqItem[] = [
  {
    question: "What happens after I book a call or request an audit?",
    answer:
      "We'll ask a few questions about your business and what you're trying to improve, then follow up with next steps — no pressure, no obligation to continue.",
  },
  {
    question: "Do I need to know exactly what I want first?",
    answer:
      "No. Most people who reach out have a problem, not a fully formed plan. Part of the Discover phase is figuring out what's actually worth building.",
  },
  {
    question: "What's included in the free audit?",
    answer:
      "See the Free Audit page for the current scope and turnaround — we keep that in one place so it stays accurate.",
  },
  {
    question: "Do you only work with businesses that already have a website?",
    answer:
      "No. We work with businesses starting from nothing as well as ones improving something that already exists.",
  },
  {
    question: "How do you price a project?",
    answer:
      "It depends on scope, so we don't publish flat prices. Tell us what you need and we'll put together a proposal.",
  },
];
