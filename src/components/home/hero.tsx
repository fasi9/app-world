import { BookCallCta, AuditCta } from "@/components/cta/primary-ctas";
import { Container } from "@/components/ui/container";
import { FactGate } from "@/lib/facts";
import { siteFacts, siteMeta } from "@/site.config";
import { IntelligenceCorePoster } from "./intelligence-core-poster";

export function Hero() {
  return (
    <section className="theme-dark relative overflow-hidden bg-background pb-20 pt-16 text-foreground sm:pt-24 lg:pb-28 lg:pt-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            {siteMeta.name}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {siteMeta.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">{siteMeta.supportingCopy}</p>

          <FactGate fact={siteFacts.targetClients} label="targetClients (outcome line)">
            <p className="mt-4 max-w-xl border-l-2 border-cyan pl-4 text-base text-foreground/90">
              For {siteFacts.targetClients}: more enquiries, less manual work, and a site you can
              rely on.
            </p>
          </FactGate>

          <div className="mt-10 flex flex-wrap gap-4">
            <BookCallCta variant="primary" />
            <AuditCta variant="secondary" />
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <IntelligenceCorePoster className="h-auto w-full" />
        </div>
      </Container>
    </section>
  );
}
