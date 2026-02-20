import { supabaseServer } from "@/lib/supabaseServer";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Admin Dashboard"
};

export default async function AdminPage() {
  const supabase = await supabaseServer();

  const [{ count: productCount }, { count: newsCount }, { count: jobCount }] = await Promise.all([
    supabase.from("products").select("*", { count: "exact", head: true }),
    supabase.from("news").select("*", { count: "exact", head: true }),
    supabase.from("jobs").select("*", { count: "exact", head: true })
  ]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-lab-blue">Dashboard</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">Admin Overview</h1>
        <p className="mt-2 text-sm text-slate-300">Monitor published content and manage your pipeline.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Products</p>
          <p className="text-3xl font-semibold text-white">{productCount ?? 0}</p>
        </Card>
        <Card className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">News</p>
          <p className="text-3xl font-semibold text-white">{newsCount ?? 0}</p>
        </Card>
        <Card className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Jobs</p>
          <p className="text-3xl font-semibold text-white">{jobCount ?? 0}</p>
        </Card>
      </div>
    </div>
  );
}
