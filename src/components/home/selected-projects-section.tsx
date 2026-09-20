import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { conceptProjects } from "@/lib/content/concept-projects";

export function SelectedProjectsSection() {
  return (
    <section className="border-y border-hairline bg-surface-muted py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Concept Projects</h2>
          <p className="mt-4 max-w-2xl text-foreground/70">
            We&apos;re building our real client portfolio. Until then, here are three concept
            projects — clearly labeled as concepts, with no invented results.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {conceptProjects.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 0.08, 0.24)}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-hairline bg-background p-6 transition-colors hover:border-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-violet/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-violet-ink">
                  Concept Project
                </span>
                <span className="mt-4 font-mono text-xs text-foreground/70">
                  {project.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-foreground/70">{project.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-ink">
                  View concept
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
