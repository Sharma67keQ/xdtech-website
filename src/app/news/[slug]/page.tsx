import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/Card";
import { newsPosts } from "@/data/news";

interface NewsPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: NewsPageProps): Metadata {
  const post = newsPosts.find((item) => item.slug === params.slug);
  if (!post) return { title: "News" };

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  const post = newsPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <PageTransition>
      <Container className="space-y-10 py-16">
        <div className="space-y-4">
          <Link href="/news" className="text-sm text-slate-400 hover:text-white">
            Back to News
          </Link>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">{post.title}</h1>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
            <span>{post.category}</span>
            <span>/</span>
            <span>{post.date}</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <article className="space-y-6 text-base leading-7 text-slate-200">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <aside className="space-y-6">
            <Card className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Share</h3>
              <div className="flex flex-col gap-3 text-sm text-slate-300">
                <button className="text-left hover:text-white">Copy Link</button>
                <button className="text-left hover:text-white">Share on LinkedIn</button>
                <button className="text-left hover:text-white">Share on X</button>
              </div>
            </Card>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Related</h3>
              {newsPosts.slice(0, 3).map((item) => (
                <Link key={item.slug} href={`/news/${item.slug}`} className="text-sm text-slate-300 hover:text-white">
                  {item.title}
                </Link>
              ))}
            </Card>
          </aside>
        </div>
      </Container>
    </PageTransition>
  );
}
