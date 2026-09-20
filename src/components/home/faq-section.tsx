import { Container, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { homepageFaqs } from "@/lib/content/faq";

export function FaqSection() {
  return (
    <section className="border-y border-hairline bg-surface-muted py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Common questions</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-hairline">
          {homepageFaqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium marker:content-none">
                {faq.question}
                <span
                  aria-hidden
                  className="shrink-0 text-xl text-cyan-ink transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-foreground/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
