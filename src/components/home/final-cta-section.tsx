import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { BookCallCta, AuditCta } from "@/components/cta/primary-ctas";
import { FactGate } from "@/lib/facts";
import { siteFacts } from "@/site.config";

export function FinalCtaSection() {
  return (
    <section className="theme-dark bg-background py-24 text-foreground sm:py-32">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Ready to talk about what you&apos;re trying to fix?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Book a free call, or send us a free audit request and we&apos;ll tell you what we see.
          </p>
          <FactGate fact={siteFacts.responseTimePromise} label="responseTimePromise">
            <p className="mt-2 text-sm text-cyan">{siteFacts.responseTimePromise}</p>
          </FactGate>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <BookCallCta variant="primary" />
            <AuditCta variant="secondary" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
