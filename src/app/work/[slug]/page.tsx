import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Eyebrow } from "@/components/ui/container";
import { BookCallCta, AuditCta } from "@/components/cta/primary-ctas";
import { conceptProjects } from "@/lib/content/concept-projects";

export function generateStaticParams() {
  return conceptProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = conceptProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = conceptProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Link href="/work" className="text-sm font-medium text-cyan-ink hover:underline">
          ← Back to work
        </Link>

        <span className="mt-6 inline-flex w-fit items-center rounded-full bg-violet/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-violet-ink">
          Concept Project
        </span>
        <Eyebrow>{project.category}</Eyebrow>
        <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-foreground/70">{project.summary}</p>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold">The brief</h2>
          <p className="mt-3 text-foreground/80">{project.brief}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold">Design decisions</h2>
          <ul className="mt-3 flex flex-col gap-2 text-foreground/80">
            {project.designDecisions.map((d) => (
              <li key={d} className="flex gap-2">
                <span aria-hidden className="text-cyan">→</span>
                {d}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold">Intended benefits</h2>
          <ul className="mt-3 flex flex-col gap-2 text-foreground/80">
            {project.intendedBenefits.map((b) => (
              <li key={b} className="flex gap-2">
                <span aria-hidden className="text-cyan">→</span>
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-foreground/70">
            This is a concept project built to demonstrate our thinking — not a delivered client
            engagement, and we haven&apos;t claimed results for it.
          </p>
        </section>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-hairline pt-8">
          <BookCallCta variant="primary" />
          <AuditCta variant="secondary" />
        </div>
      </Container>
    </div>
  );
}
