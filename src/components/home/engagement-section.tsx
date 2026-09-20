import { Container, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { engagementOptions } from "@/lib/content/engagement-options";

export function EngagementSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Ways to work with us</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Engagement options</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {engagementOptions.map((option, i) => (
            <Reveal key={option.id} delay={Math.min(i * 0.08, 0.24)}>
              <div className="flex h-full flex-col rounded-2xl border border-hairline p-6">
                <h3 className="font-display text-xl font-semibold">{option.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{option.summary}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-1.5 text-sm text-foreground/80">
                  {option.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span aria-hidden className="h-1 w-1 rounded-full bg-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/contact" variant="secondary" className="mt-6">
                  Request a Proposal
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
