import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/Card";
import { supabaseServer } from "@/lib/supabaseServer";
import type { NewsItem } from "@/lib/types";

export const metadata = {
  title: "News",
  description: "News, launches, and research from XD TECH."
};

export default async function NewsPage() {
  const supabase = await supabaseServer();
  const { data } = await supabase
    .from("news")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  const posts = (data as NewsItem[]) ?? [];
  const [featured, ...rest] = posts;

  return (
    <PageTransition>
      <Container className="space-y-12 py-16">
        <SectionTitle
          eyebrow="News"
          title="Inside XD TECH"
          description="Updates across products, research, and company milestones."
        />

        {featured ? (
          <Card className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-lab-blue">Featured</p>
              <h2 className="text-2xl font-semibold text-white">{featured.title}</h2>
              <p className="text-sm text-slate-300">{featured.summary}</p>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{new Date(featured.created_at).toLocaleDateString()}</span>
                <span>/</span>
                <span>{featured.tags?.[0] ?? "Update"}</span>
              </div>
              <Link href={`/news/${featured.id}`} className="text-sm text-lab-blue">
                Read full story
              </Link>
            </div>
            <div className="rounded-xl bg-slate-900/70" />
          </Card>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <Card key={post.id} className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                {post.tags?.[0] ?? "Update"}
              </div>
              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-slate-300">{post.summary}</p>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                <span>/</span>
                <span>{post.tags?.[0] ?? "Update"}</span>
              </div>
              <Link href={`/news/${post.id}`} className="text-sm text-lab-blue">
                Read more
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
