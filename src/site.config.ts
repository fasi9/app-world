/**
 * Central source of truth for every business fact used on the site.
 * These are supplied by the client (see build brief section 1) and must
 * never be invented. A `null` value means "not supplied yet" — consuming
 * components must call `getFact` / `<Fact>` so missing values degrade
 * honestly (visible TODO in development, hidden in production) instead of
 * silently rendering a placeholder as if it were real.
 */

export type Fact = string | null;

export interface SiteFacts {
  targetClients: Fact;
  founderFacts: Fact;
  contactEmail: Fact;
  whatsappNumber: Fact;
  bookingLink: Fact;
  locationAndHours: Fact;
  responseTimePromise: Fact;
  freeAuditScope: Fact;
  socialProfiles: { label: string; url: string }[];
  productionDomain: Fact;
  /** Whether the QA-founder differentiator (brief section 2) is confirmed for use. */
  qaDifferentiatorConfirmed: boolean;
}

export const siteFacts: SiteFacts = {
  targetClients: null,
  founderFacts: null,
  contactEmail: null,
  whatsappNumber: null,
  bookingLink: null,
  locationAndHours: null,
  responseTimePromise: null,
  freeAuditScope: null,
  socialProfiles: [],
  productionDomain: null,
  qaDifferentiatorConfirmed: false,
};

export const siteMeta = {
  name: "FK AI Solutions",
  tagline: "We build, improve, and boost your business.",
  headline: "Smart AI. Creative Design. Better Business.",
  supportingCopy:
    "We build websites, create AI solutions, design brands, and deliver marketing that helps your business work smarter and grow.",
};

export const primaryCta = {
  label: "Book a Free Call",
  hrefFact: "bookingLink" as const,
};

export const secondaryCta = {
  label: "Get a Free Audit",
  href: "/audit",
};
