import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { serviceGroups } from "@/lib/content/services";

export function ServiceGroupsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Five services, built to work together.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((group, i) => (
            <Reveal key={group.id} delay={Math.min(i * 0.06, 0.3)}>
              <Link
                href={group.href}
                className="group flex h-full flex-col rounded-2xl border border-hairline p-6 transition-colors hover:border-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
              >
                <span className="font-mono text-xs text-foreground/70">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold">{group.name}</h3>
                <p className="mt-2 flex-1 text-sm text-foreground/70">{group.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-ink">
                  Learn more
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
