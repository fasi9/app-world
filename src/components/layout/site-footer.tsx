import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { FactGate, getFact } from "@/lib/facts";
import { siteFacts, siteMeta } from "@/site.config";

export function SiteFooter() {
  const email = getFact(siteFacts.contactEmail);
  const whatsapp = getFact(siteFacts.whatsappNumber);

  return (
    <footer className="theme-dark border-t border-hairline bg-background pb-24 pt-16 text-foreground lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="font-display text-xl font-semibold tracking-tight">
              {siteMeta.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-foreground/70">{siteMeta.tagline}</p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <FactGate fact={siteFacts.contactEmail} label="contactEmail">
                <a href={`mailto:${email}`} className="hover:text-cyan">
                  {email}
                </a>
              </FactGate>
              <FactGate fact={siteFacts.whatsappNumber} label="whatsappNumber">
                <a
                  href={`https://wa.me/${(whatsapp ?? "").replace(/[^0-9]/g, "")}`}
                  className="hover:text-cyan"
                >
                  WhatsApp: {whatsapp}
                </a>
              </FactGate>
              <FactGate fact={siteFacts.locationAndHours} label="locationAndHours">
                <span className="text-foreground/70">{siteFacts.locationAndHours}</span>
              </FactGate>
            </div>
            {siteFacts.socialProfiles.length > 0 && (
              <div className="mt-6 flex gap-4 text-sm">
                {siteFacts.socialProfiles.map((s) => (
                  <a key={s.url} href={s.url} className="hover:text-cyan">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                {group.heading}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-foreground/80 hover:text-cyan">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteMeta.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="hover:text-cyan">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
