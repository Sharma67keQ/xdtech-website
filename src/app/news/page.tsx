import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/Card";
import { newsPosts } from "@/data/news";

export const metadata = {
  title: "News",
  description: "News, launches, and research from XD TECH."
};

export default function NewsPage() {
  const [featured, ...rest] = newsPosts;

  return (
    <PageTransition>
      <Container className="space-y-12 py-16">
        <SectionTitle
          eyebrow="News"
          title="Inside XD TECH"
          description="Updates across products, research, and company milestones."
        />

        <Card className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-blue">Featured</p>
            <h2 className="text-2xl font-semibold text-white">{featured.title}</h2>
            <p className="text-sm text-slate-300">{featured.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span>{featured.date}</span>
              <span>/</span>
              <span>{featured.category}</span>
            </div>
            <Link href={`/news/${featured.slug}`} className="text-sm text-brand-blue">
              Read full story
            </Link>
          </div>
          <div className="rounded-xl bg-slate-900/70" />
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <Card key={post.slug} className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                {post.category}
              </div>
              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-slate-300">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{post.date}</span>
                <span>/</span>
                <span>{post.category}</span>
              </div>
              <Link href={`/news/${post.slug}`} className="text-sm text-brand-blue">
                Read more
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
