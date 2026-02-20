import { ProductsPageClient } from "@/components/sections/ProductsPageClient";
import { supabaseServer } from "@/lib/supabaseServer";
import type { Product } from "@/lib/types";

export const metadata = {
  title: "Products",
  description: "Explore XD TECH apps, wearables, and hardware."
};

export default async function ProductsPage() {
  const supabase = await supabaseServer();
  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  return <ProductsPageClient products={(data as Product[]) ?? []} />;
}
