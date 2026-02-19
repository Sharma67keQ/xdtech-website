import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "About",
  description: "XD TECH is a premium, global technology company focused on solving real problems."
};

const values = [
  {
    title: "Precision",
    description: "Every product is engineered with detail, resilience, and focus."
  },
  {
    title: "Trust",
    description: "We earn confidence through security, privacy, and transparency."
  },
  {
    title: "Global Impact",
    description: "We build for people everywhere, prioritizing dignity and access."
  }
];

export default function AboutPage() {
  return (
    <PageTransition>
      <Container className="space-y-16 py-16">
        <SectionTitle
          eyebrow="About"
          title="XD TECH: Xalinta Dhibaatoyinka"
          description="XD TECH exists to solve the hard problems that stand between people and the technology they deserve."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Our Story</h3>
            <p className="text-sm text-slate-300">
              XD TECH was founded to build premium technology anchored in human outcomes. We design products that feel
              simple, resilient, and powerful in everyday life.
            </p>
            <p className="text-sm text-slate-300">
              X = Xalinta. D = Dhibaatoyinka. Our name is our promise: solving problems with ambition and care.
            </p>
          </Card>
          <Card className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Founder Vision</h3>
            <p className="text-sm text-slate-300">
              Kadar power, kind success building a future our people are proud of. We lead with empathy, build with
              discipline, and scale with responsibility.
            </p>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-white">{value.title}</h3>
              <p className="text-sm text-slate-300">{value.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
