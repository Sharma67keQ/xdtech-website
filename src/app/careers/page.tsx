import { CareersPageClient } from "@/components/sections/CareersPageClient";
import { supabaseServer } from "@/lib/supabaseServer";
import type { Job } from "@/lib/types";

export const metadata = {
  title: "Careers",
  description: "Join XD TECH and build world-class technology for global impact."
};

export default async function CareersPage() {
  const supabase = await supabaseServer();
  const { data } = await supabase
    .from("jobs")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  return <CareersPageClient jobs={(data as Job[]) ?? []} />;
}
