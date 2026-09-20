import { Container, Eyebrow } from "@/components/ui/container";
import { BookCallCta, AuditCta } from "@/components/cta/primary-ctas";

export function PagePlaceholder({ title, note }: { title: string; note: string }) {
  return (
    <div className="py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <Eyebrow>In progress</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{title}</h1>
        <p className="mt-4 text-foreground/70">{note}</p>
        <p className="mt-2 text-sm text-foreground/70">
          This page is written with its own real content in the next build phase — it isn&apos;t
          finished yet, and we&apos;d rather tell you that than fake it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <BookCallCta variant="primary" />
          <AuditCta variant="secondary" />
        </div>
      </Container>
    </div>
  );
}
