import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "Terms of Service",
  description: "XD TECH terms of service."
};

export default function TermsPage() {
  return (
    <PageTransition>
      <Container className="space-y-8 py-16">
        <SectionTitle
          eyebrow="Legal"
          title="Terms of Service"
          description="Effective date: February 19, 2026"
        />
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            By accessing XD TECH services, you agree to these terms. Use the services responsibly and in compliance with
            applicable laws.
          </p>
          <p>
            Content and materials are provided for informational purposes and may be updated without notice.
          </p>
          <p>
            XD TECH is not liable for indirect damages arising from use of the services. Liability is limited to the
            maximum extent permitted by law.
          </p>
          <p>
            For questions, contact our legal team. Continued use of the services indicates acceptance of updates.
          </p>
        </div>
      </Container>
    </PageTransition>
  );
}
