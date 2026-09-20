import { Container, Eyebrow } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { AuditCta } from "@/components/cta/primary-ctas";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32">
      <Container className="max-w-xl text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-foreground/70">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" variant="primary">
            Back to home
          </ButtonLink>
          <AuditCta variant="secondary" />
        </div>
      </Container>
    </div>
  );
}
