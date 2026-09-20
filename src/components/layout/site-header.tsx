"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";
import { BookCallCta, AuditCta } from "@/components/cta/primary-ctas";
import { siteMeta } from "@/site.config";
import { useMobileMenu } from "./mobile-menu-context";

export function SiteHeader() {
  const { open, setOpen } = useMobileMenu();
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
          aria-label={`${siteMeta.name} — home`}
        >
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-cyan theme-dark"
          >
            FK
          </span>
          <span className="hidden sm:inline">{siteMeta.name}</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 font-body text-sm font-medium lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <AuditCta variant="secondary" />
          <BookCallCta variant="primary" />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-hairline bg-background px-4 pb-6 pt-2 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 font-body text-base">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <AuditCta variant="secondary" className="w-full" />
            <BookCallCta variant="primary" className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
