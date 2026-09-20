import { Container, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { siteFacts } from "@/site.config";

const isDev = process.env.NODE_ENV !== "production";

const testingSteps = [
  { name: "Manual testing", description: "Walking through every flow by hand before it's called done." },
  { name: "Automated testing", description: "Repeatable checks that catch regressions as the project grows." },
  { name: "Usability testing", description: "Checking that the thing we built is actually easy to use." },
  { name: "Cross-browser & mobile", description: "Verified across the browsers and devices your customers actually use." },
];

/**
 * QA-founder differentiator (brief section 2). Only renders once
 * `siteFacts.qaDifferentiatorConfirmed` is explicitly set true — until
 * then this is a claim we haven't been given permission to make.
 */
export function HowWeTestSection() {
  if (!siteFacts.qaDifferentiatorConfirmed) {
    if (!isDev) return null;
    return (
      <Container className="py-10">
        <div className="rounded-2xl border border-dashed border-violet p-6 font-mono text-xs text-violet">
          TODO: &quot;How we test&quot; section is written but hidden — set
          siteFacts.qaDifferentiatorConfirmed to true once the QA-founder differentiator
          (brief section 2) is confirmed for use.
        </div>
      </Container>
    );
  }

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>How we test</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Everything we build gets tested before it ships.
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Our founder&apos;s background is in software QA, so testing isn&apos;t an
            afterthought here — it&apos;s built into how every project gets made.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testingSteps.map((step, i) => (
            <Reveal key={step.name} delay={Math.min(i * 0.06, 0.24)}>
              <div className="rounded-2xl border border-hairline p-6">
                <h3 className="font-display text-lg font-semibold">{step.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
