import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/Card";
import { supabaseServer } from "@/lib/supabaseServer";
import type { NewsItem } from "@/lib/types";

interface NewsPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const supabase = await supabaseServer();
  const { data } = await supabase.from("news").select("*").eq("id", params.slug).maybeSingle();

  if (!data) return { title: "News" };

  return {
    title: data.title,
    description: data.summary ?? ""
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const supabase = await supabaseServer();
  const { data } = await supabase.from("news").select("*").eq("id", params.slug).maybeSingle();

  if (!data) notFound();

  const post = data as NewsItem;

  return (
    <PageTransition>
      <Container className="space-y-10 py-16">
        <div className="space-y-4">
          <Link href="/news" className="text-sm text-slate-400 hover:text-white">
            Back to News
          </Link>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">{post.title}</h1>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
            <span>{post.tags?.[0] ?? "Update"}</span>
            <span>/</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <article className="space-y-6 text-base leading-7 text-slate-200">
            {(post.body ?? "").split("\n\n").map((paragraph) => (
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
              <Link href="/news" className="text-sm text-slate-300 hover:text-white">
                View all news
              </Link>
            </Card>
          </aside>
        </div>
      </Container>
    </PageTransition>
  );
}
