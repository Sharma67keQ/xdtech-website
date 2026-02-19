import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "Privacy Policy",
  description: "XD TECH privacy policy."
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <Container className="space-y-8 py-16">
        <SectionTitle
          eyebrow="Legal"
          title="Privacy Policy"
          description="Effective date: February 19, 2026"
        />
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            XD TECH respects your privacy. This policy describes how we collect, use, and protect information when you
            interact with our websites and services.
          </p>
          <p>
            We collect information you provide directly, such as contact details, and limited technical data needed to
            operate our services. We do not sell personal data.
          </p>
          <p>
            Data is secured using industry-standard controls. Access is limited to authorized personnel and trusted
            partners operating under strict agreements.
          </p>
          <p>
            You may request access, correction, or deletion of your personal data by contacting our privacy team.
          </p>
        </div>
      </Container>
    </PageTransition>
  );
}
