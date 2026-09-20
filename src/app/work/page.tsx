import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/container";
import { ProjectFilterGrid } from "@/components/work/project-filter-grid";
import { conceptProjects } from "@/lib/content/concept-projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Concept projects from FK AI Solutions across AI & automation, web & software, and brand & experience. Our real client portfolio is in progress.",
};

export default function WorkPage() {
  return (
    <div className="py-20 sm:py-28">
      <Container>
        <Eyebrow>Work</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">Portfolio</h1>
        <p className="mt-4 max-w-2xl text-foreground/70">
          We&apos;re building our real client portfolio. Until then, these are labeled Concept
          Projects — real design thinking, no invented results.
        </p>
        <div className="mt-12">
          <ProjectFilterGrid projects={conceptProjects} />
        </div>
      </Container>
    </div>
  );
}
