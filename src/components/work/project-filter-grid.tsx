"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ConceptProject } from "@/lib/content/concept-projects";

export function ProjectFilterGrid({ projects }: { projects: ConceptProject[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects],
  );
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan ${
              active === category
                ? "border-cyan bg-cyan text-navy"
                : "border-hairline text-foreground/80 hover:border-foreground/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex flex-col rounded-2xl border border-hairline p-6 transition-colors hover:border-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-violet/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-violet-ink">
              Concept Project
            </span>
            <span className="mt-4 font-mono text-xs text-foreground/70">{project.category}</span>
            <h2 className="mt-2 font-display text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-foreground/70">{project.summary}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-ink">
              View concept
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-sm text-foreground/60">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
