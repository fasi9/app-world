"use client";

import { useEffect, useState } from "react";
import { BookCallCta, AuditCta } from "@/components/cta/primary-ctas";
import { useMobileMenu } from "./mobile-menu-context";

const FIELD_TAGS = new Set(["INPUT", "TEXTAREA", "SELECT"]);

/**
 * Compact sticky CTA bar for mobile only. Hides while a form field is
 * focused (so it never sits over the on-screen keyboard) or while the
 * mobile nav menu is open, since that panel has its own CTAs.
 */
export function MobileCtaBar() {
  const { open: menuOpen } = useMobileMenu();
  const [fieldFocused, setFieldFocused] = useState(false);
  const hidden = fieldFocused || menuOpen;

  useEffect(() => {
    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && FIELD_TAGS.has(target.tagName)) setFieldFocused(true);
    };
    const onFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && FIELD_TAGS.has(target.tagName)) setFieldFocused(false);
    };
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-hairline bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-200 lg:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={hidden}
    >
      <AuditCta variant="secondary" className="flex-1" />
      <BookCallCta variant="primary" className="flex-1" />
    </div>
  );
}
