import { ButtonLink } from "@/components/ui/button";
import { FactGate, getFact } from "@/lib/facts";
import { siteFacts } from "@/site.config";

/**
 * The two conversion actions used everywhere (brief section 4.1).
 * "Book a Free Call" depends on a configured booking link and is hidden
 * (dev: shown as a TODO) until one exists. "Get a Free Audit" always works
 * since it points at our own /audit page.
 */
export function BookCallCta({ variant = "primary" as const, className = "" }) {
  const booking = getFact(siteFacts.bookingLink);
  return (
    <FactGate fact={siteFacts.bookingLink} label="bookingLink">
      <ButtonLink href={booking ?? "#"} variant={variant} external className={className}>
        Book a Free Call
      </ButtonLink>
    </FactGate>
  );
}

export function AuditCta({ variant = "secondary" as const, className = "" }) {
  return (
    <ButtonLink href="/audit" variant={variant} className={className}>
      Get a Free Audit
    </ButtonLink>
  );
}
