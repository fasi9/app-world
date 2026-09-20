"use client";

import { useEffect, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Drives Lenis from gsap.ticker (autoRaf disabled) so Lenis and
 * ScrollTrigger share a single RAF loop, and resyncs ScrollTrigger on
 * every Lenis scroll frame. Must render inside <ReactLenis root> so
 * `useLenis` can read the instance once it's ready (it's created in an
 * effect, so it isn't available on the very first render).
 */
function LenisTicker() {
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (!lenis) return;
    function update(time: number) {
      lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, [lenis]);

  return null;
}

/**
 * Single coordinated scroll loop for the whole app (brief section 7).
 * Disabled entirely under prefers-reduced-motion — native scroll takes over
 * and nothing here mounts.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return <>{children}</>;

  return (
    <ReactLenis root options={{ autoRaf: false, smoothWheel: true, syncTouch: false }}>
      <LenisTicker />
      {children}
    </ReactLenis>
  );
}
