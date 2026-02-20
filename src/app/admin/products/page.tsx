import { ProductsAdmin } from "@/components/admin/ProductsAdmin";

export const metadata = {
  title: "Admin Products"
};

export default function AdminProductsPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-lab-blue">Products</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">Manage Products</h1>
        <p className="mt-2 text-sm text-slate-300">Create, publish, and update product listings.</p>
      </div>
      <ProductsAdmin />
    </div>
  );
}
