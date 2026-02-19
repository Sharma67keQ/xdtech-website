import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";
import { newsPosts } from "@/data/news";
import { careers } from "@/data/careers";

export const metadata = {
  title: "Home",
  description: "XD TECH builds world-class software, hardware, and smart devices for the world."
};

export default function HomePage() {
  return (
    <PageTransition>
      <div className="gradient-hero bg-grid">
        <Container className="py-20">
          <Reveal>
            <div className="max-w-3xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-blue">
                XD TECH
              </p>
              <h1 className="text-balance text-4xl font-semibold text-white md:text-6xl">
                XD TECH <span className="text-brand-blue">Xalinta Dhibaatoyinka</span>
              </h1>
              <p className="text-lg text-slate-300">
                Building world-class software, hardware, and smart devices for the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/products">Explore Products</Button>
                <Button variant="secondary" href="/contact">Contact Sales</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

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
            <Reveal key={product.name} delay={index * 0.1}>
              <Card className="flex h-full flex-col gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <p className="text-sm text-slate-300">{product.description}</p>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-400">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link href={product.href} className="text-sm text-brand-blue">
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
            title="Recent updates from XD TECH"
            description="Fresh insights, launches, and partnerships shaping the future."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {newsPosts.slice(0, 3).map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.1}>
              <Card className="space-y-4">
                <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  {post.category}
                </div>
                <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                <p className="text-sm text-slate-300">{post.excerpt}</p>
                <Link href={`/news/${post.slug}`} className="text-sm text-brand-blue">
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
            eyebrow="Careers"
            title="Join the team building the future"
            description="We hire globally and work with people who care about impact, privacy, and excellence."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {careers.map((role, index) => (
            <Reveal key={role.title} delay={index * 0.1}>
              <Card className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                <div className="flex gap-2 text-xs text-slate-400">
                  <span>{role.location}</span>
                  <span>/</span>
                  <span>{role.type}</span>
                </div>
                <Link href="/careers" className="text-sm text-brand-blue">
                  View Role
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <div className="border-t border-slate-900 bg-brand-dark2">
        <Container className="py-12">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <h3 className="text-2xl font-semibold text-white">
                XD TECH <span className="text-brand-blue">Home to the world.</span>
              </h3>
              <Button variant="secondary" href="/about">Discover Our Story</Button>
            </div>
          </Reveal>
        </Container>
      </div>
    </PageTransition>
  );
}
