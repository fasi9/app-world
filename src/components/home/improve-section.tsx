import { Container, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ImproveSelector } from "./improve-selector";

export function ImproveSection() {
  return (
    <section className="border-y border-hairline bg-surface-muted py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Where to start</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            What would you like to improve?
          </h2>
        </Reveal>
        <div className="mt-8">
          <ImproveSelector />
        </div>
      </Container>
    </section>
  );
}
