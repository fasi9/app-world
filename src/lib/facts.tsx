import type { ReactNode } from "react";
import type { Fact } from "@/site.config";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Renders `children` only when `fact` is a non-empty string.
 * - In development, a missing fact renders a visible dashed TODO badge
 *   (labelled by `label`) instead of silently disappearing, so gaps are
 *   obvious while building.
 * - In production, a missing fact renders nothing — never a fabricated
 *   placeholder value.
 */
export function FactGate({
  fact,
  label,
  children,
}: {
  fact: Fact;
  label: string;
  children: ReactNode;
}) {
  if (fact && fact.trim().length > 0) return <>{children}</>;
  if (!isDev) return null;
  return (
    <span
      className="inline-flex items-center gap-1 rounded border border-dashed border-violet px-2 py-0.5 text-xs font-mono text-violet"
      title={`Missing fact: ${label}. Hidden automatically in production.`}
    >
      TODO: {label}
    </span>
  );
}

/** Returns the fact string, or `null` when unset/blank. */
export function getFact(fact: Fact): string | null {
  return fact && fact.trim().length > 0 ? fact : null;
}
