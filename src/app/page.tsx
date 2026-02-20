import { HomePageClient } from "@/components/sections/HomePageClient";
import { supabaseServer } from "@/lib/supabaseServer";
import type { Job, NewsItem, Product } from "@/lib/types";

export const metadata = {
  title: "Home",
  description: "XD TECH builds world-class software, hardware, and smart devices for the world."
};

export default async function HomePage() {
  const supabase = await supabaseServer();

  const [{ data: products }, { data: news }, { data: jobs }] = await Promise.all([
    supabase.from("products").select("*").eq("published", true).order("created_at", { ascending: false }),
    supabase.from("news").select("*").eq("published", true).order("created_at", { ascending: false }),
    supabase.from("jobs").select("*").eq("published", true).order("created_at", { ascending: false })
  ]);

  return (
    <HomePageClient
      products={(products as Product[]) ?? []}
      news={(news as NewsItem[]) ?? []}
      jobs={(jobs as Job[]) ?? []}
    />
  );
}
