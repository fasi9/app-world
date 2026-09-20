import { Container, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { processSteps } from "@/lib/content/process";

export function ProcessSection() {
  return (
    <section className="theme-dark bg-background py-20 text-foreground sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Our process</h2>
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={Math.min(i * 0.06, 0.3)}
              className="border-t border-hairline pt-4"
            >
              <span className="font-mono text-xs text-cyan">{step.number}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{step.name}</h3>
              <p className="mt-2 text-sm text-foreground/70">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
