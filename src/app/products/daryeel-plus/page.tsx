import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Daryeel Plus",
  description: "Daryeel Plus is XD TECH's premium health companion for families."
};

const features = [
  {
    title: "Family Circle",
    description: "Invite loved ones and share live location with privacy-first controls."
  },
  {
    title: "Health Challenges with rewards",
    description: "Motivate healthy habits through guided challenges and smart incentives."
  },
  {
    title: "Doctors & Hospitals marketplace",
    description: "Coming soon: book trusted care with transparent quality signals."
  },
  {
    title: "AI Health Assistant",
    description: "Safe, general guidance to help you understand symptoms and next steps."
  }
];

const trustPoints = [
  "Privacy-first architecture with regional data controls",
  "End-to-end encryption for sensitive data",
  "We never sell personal data"
];

export default function DaryeelPlusPage() {
  return (
    <PageTransition>
      <div className="gradient-hero bg-grid">
        <Container className="py-16">
          <Reveal>
            <div className="max-w-3xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-lab-blue">
                Daryeel Plus
              </p>
              <h1 className="text-4xl font-semibold text-white md:text-5xl">
                Premium care intelligence for every family.
              </h1>
              <p className="text-lg text-slate-300">
                Daryeel Plus unifies family safety, health motivation, and trusted guidance into a single secure platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Request Demo</Button>
                <Button variant="secondary" href="/contact">Join Waitlist</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      <Container className="space-y-16 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="Screenshots"
            title="Designed for clarity"
            description="Clean, responsive experiences across mobile, tablet, and desktop."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="aspect-[4/5]">
              <div className="h-full w-full rounded-lg bg-slate-900/70" />
            </Card>
          ))}
        </div>
      </Container>

      <Container className="space-y-16 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="Features"
            title="Built for everyday care"
            description="A full spectrum of tools for families, caregivers, and trusted partners."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1}>
              <Card className="space-y-3">
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="space-y-10 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="Trust"
            title="Security and privacy by default"
            description="Every layer of Daryeel Plus is engineered to protect people, data, and relationships."
          />
        </Reveal>
        <Card>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Card>
        <div className="flex flex-wrap gap-4">
          <Button href="/contact">Request Demo</Button>
          <Button variant="secondary" href="/contact">Join Waitlist</Button>
        </div>
      </Container>
    </PageTransition>
  );
}
