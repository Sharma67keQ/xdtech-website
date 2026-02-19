import { PageTransition } from "@/components/PageTransition";
import { ProductsPageClient } from "@/components/sections/ProductsPageClient";

export const metadata = {
  title: "Products",
  description: "Explore XD TECH apps, wearables, and hardware."
};

export default function ProductsPage() {
  return (
    <PageTransition>
      <ProductsPageClient />
    </PageTransition>
  );
}
