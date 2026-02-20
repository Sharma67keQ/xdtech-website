"use client";

import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import type { Job, NewsItem, Product } from "@/lib/types";

interface HomePageClientProps {
  products: Product[];
  news: NewsItem[];
  jobs: Job[];
}

export function HomePageClient({ products, news, jobs }: HomePageClientProps) {
  return (
    <PageTransition>
      <div className="gradient-hero bg-grid relative overflow-hidden">
        <div className="particles pointer-events-none absolute inset-0">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              style={{
                top: `${(index * 17) % 100}%`,
                left: `${(index * 29) % 100}%`,
                animationDelay: `${index * 0.4}s`
              }}
            />
          ))}
        </div>
        <Container className="relative z-10 py-24">
          <Reveal>
            <div className="max-w-3xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-lab-blue">
                XD TECH LAB
              </p>
              <h1 className="text-balance text-4xl font-semibold text-white md:text-6xl">
                XD TECH <span className="text-lab-purple">Xalinta Dhibaatoyinka</span>
              </h1>
              <p className="text-lg text-slate-300">
                Building world-class software, hardware, and smart devices for the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/products">Explore Products</Button>
                <Button variant="secondary" href="/contact">
                  Contact Sales
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      <Container className="space-y-16 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="XD TECH Labs"
            title="A precision lab for the next wave of intelligence"
            description="We blend human-centered research with global-grade engineering to deliver high-assurance systems."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Applied AI", text: "Responsible models for health, safety, and edge autonomy." },
            { title: "Device Intelligence", text: "Sensor fusion and hardware tuned for reliability." },
            { title: "Cloud Trust", text: "Secure, compliant infrastructure for global scale." }
          ].map((lab, index) => (
            <Reveal key={lab.title} delay={index * 0.1}>
              <Card className="space-y-3">
                <h3 className="text-lg font-semibold text-white">{lab.title}</h3>
                <p className="text-sm text-slate-300">{lab.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="space-y-16 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="Innovation Pipeline"
            title="From concept to global deployment"
            description="A disciplined pipeline that keeps quality, ethics, and performance aligned."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-4">
          {["Discovery", "Prototype", "Validation", "Scale"].map((step, index) => (
            <Reveal key={step} delay={index * 0.1}>
              <Card className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-lab-blue">Phase {index + 1}</p>
                <h3 className="text-lg font-semibold text-white">{step}</h3>
                <p className="text-sm text-slate-300">
                  {step === "Discovery"
                    ? "Research and human-first design."
                    : step === "Prototype"
                    ? "Rapid validation with real devices."
                    : step === "Validation"
                    ? "Security, compliance, and durability."
                    : "Global rollout with continuous updates."}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="space-y-16 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="Products"
            title="Premium technology for real-world impact"
            description="A focused portfolio spanning health, wearables, devices, and cloud services."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.1}>
              <Card className="flex h-full flex-col gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  <p className="text-sm text-slate-300">{product.description}</p>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-400">
                  {(product.features ?? []).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link href={product.title === "Daryeel Plus" ? "/products/daryeel-plus" : "/products"} className="text-sm text-lab-blue">
                  View Product
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="space-y-16 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="News"
            title="Signals from the frontier"
            description="Investor-ready updates across research, partnerships, and milestones."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.1}>
              <Card className="space-y-4">
                <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  {post.tags?.[0] ?? "Update"}
                </div>
                <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                <p className="text-sm text-slate-300">{post.summary}</p>
                <Link href={`/news/${post.id}`} className="text-sm text-lab-blue">
                  Read More
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="space-y-16 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="Security Infrastructure"
            title="Zero-compromise protection"
            description="Hardware-rooted security, encrypted data paths, and continuous compliance."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Encrypted telemetry with regional data controls.",
            "Independent red-team validation every release.",
            "Privacy-first architecture and vendor transparency."
          ].map((item, index) => (
            <Reveal key={item} delay={index * 0.1}>
              <Card className="space-y-2">
                <p className="text-sm text-slate-300">{item}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="space-y-16 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="Global Vision"
            title="XD TECH Home to the world"
            description="We build with a global lens, empowering families, cities, and institutions to thrive."
          />
        </Reveal>
        <Card className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-sm text-slate-300">
            XD TECH delivers resilient products across continents, with localized support and a consistent standard of care.
          </p>
          <Button variant="secondary" href="/about">
            Discover Our Story
          </Button>
        </Card>
      </Container>

      <Container className="space-y-16 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="Careers"
            title="Join the team building the future"
            description="We hire globally and work with people who care about impact, privacy, and excellence."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((role, index) => (
            <Reveal key={role.id} delay={index * 0.1}>
              <Card className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                <div className="flex gap-2 text-xs text-slate-400">
                  <span>{role.location}</span>
                  <span>/</span>
                  <span>{role.type}</span>
                </div>
                <Link href="/careers" className="text-sm text-lab-blue">
                  View Role
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
