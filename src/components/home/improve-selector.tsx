"use client";

import { useId, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { improveOptions, groupFor } from "@/lib/content/improve-selector";

/**
 * "What would you like to improve?" (brief section 9.2). Built as an ARIA
 * radiogroup with roving tabindex: arrow keys move selection, each option
 * reveals the matching services and a real next-step link.
 */
export function ImproveSelector() {
  const [selected, setSelected] = useState(improveOptions[0].id);
  const panelId = useId();
  const activeGroup = groupFor(improveOptions.find((o) => o.id === selected)!.groupId);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const idx = improveOptions.findIndex((o) => o.id === selected);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = improveOptions[(idx + 1) % improveOptions.length];
      setSelected(next.id);
      document.getElementById(`improve-option-${next.id}`)?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = improveOptions[(idx - 1 + improveOptions.length) % improveOptions.length];
      setSelected(prev.id);
      document.getElementById(`improve-option-${prev.id}`)?.focus();
    }
  }

  return (
    <div>
      <div
        role="radiogroup"
        aria-label="What would you like to improve?"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2"
      >
        {improveOptions.map((option) => {
          const isSelected = option.id === selected;
          return (
            <button
              key={option.id}
              id={`improve-option-${option.id}`}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={isSelected ? 0 : -1}
              aria-controls={panelId}
              onClick={() => setSelected(option.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan ${
                isSelected
                  ? "border-cyan bg-cyan text-navy"
                  : "border-hairline text-foreground/80 hover:border-foreground/40"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="region"
        aria-live="polite"
        className="mt-6 rounded-2xl border border-hairline bg-surface-muted p-6"
      >
        <h3 className="font-display text-xl font-semibold">{activeGroup.name}</h3>
        <p className="mt-2 text-sm text-foreground/70">{activeGroup.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {activeGroup.deliverables.map((d) => (
            <li
              key={d}
              className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {d}
            </li>
          ))}
        </ul>
        <Link
          href={activeGroup.href}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-ink hover:underline"
        >
          Explore {activeGroup.name} →
        </Link>
      </div>
    </div>
  );
}
