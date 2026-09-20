"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
}

/**
 * Restrained fade + rise on scroll (brief section 7). Purely additive: if
 * GSAP never runs (script blocked, error before hydration) the element is
 * already in its normal visible layout position — nothing is hidden by CSS.
 * `as` lets it render a semantically-required tag (e.g. `li` inside `ol`)
 * instead of always wrapping content in an extra `div`.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration: 0.8,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [delay, y] },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
