"use client";

import { useEffect } from "react";
import { Container, Eyebrow } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-24 sm:py-32">
      <Container className="max-w-xl text-center">
        <Eyebrow>Something went wrong</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
          We hit an unexpected error
        </h1>
        <p className="mt-4 text-foreground/70">
          Nothing on your end broke this — try again, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-cyan/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          >
            Try again
          </button>
          <ButtonLink href="/" variant="secondary">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
