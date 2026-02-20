"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Product } from "@/lib/types";

const emptyProduct = {
  title: "",
  subtitle: "",
  description: "",
  features: "",
  category: "",
  price_text: "",
  cover_image_url: "",
  published: false
};

export function ProductsAdmin() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<typeof emptyProduct>(emptyProduct);
  const [editingId, setEditingId] = useState<string | null>(null);

  const loadItems = async () => {
    setLoading(true);
    const response = await fetch("/api/admin/products");
    const data = await response.json();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    void loadItems();
  }, []);

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("table", "products");
    const response = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await response.json();
    if (data.url) {
      setForm((prev) => ({ ...prev, cover_image_url: data.url }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload = {
      ...form,
      features: form.features ? form.features.split(",").map((item) => item.trim()) : []
    };

    const response = await fetch("/api/admin/products", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingId ? { id: editingId, ...payload } : payload)
    });

    if (response.ok) {
      setForm(emptyProduct);
      setEditingId(null);
      await loadItems();
    }
  };

  const startEdit = (item: Product) => {
    setEditingId(item.id);
    setForm({
      title: item.title ?? "",
      subtitle: item.subtitle ?? "",
      description: item.description ?? "",
      features: item.features?.join(", ") ?? "",
      category: item.category ?? "",
      price_text: item.price_text ?? "",
      cover_image_url: item.cover_image_url ?? "",
      published: Boolean(item.published)
    });
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/products?id=${id}`, { method: "DELETE" });
    await loadItems();
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-semibold text-white">Create / Edit Product</h2>
        <form className="mt-4 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <input
            className="input-base"
            placeholder="Title"
            value={form.title}
            onChange={(event) => setForm({ ...form, title: event.target.value })}
            required
          />
          <input
            className="input-base"
            placeholder="Subtitle"
            value={form.subtitle}
            onChange={(event) => setForm({ ...form, subtitle: event.target.value })}
          />
          <input
            className="input-base md:col-span-2"
            placeholder="Description"
            value={form.description}
            onChange={(event) => setForm({ ...form, description: event.target.value })}
          />
          <input
            className="input-base md:col-span-2"
            placeholder="Features (comma separated)"
            value={form.features}
            onChange={(event) => setForm({ ...form, features: event.target.value })}
          />
          <input
            className="input-base"
            placeholder="Category"
            value={form.category}
            onChange={(event) => setForm({ ...form, category: event.target.value })}
          />
          <input
            className="input-base"
            placeholder="Price text"
            value={form.price_text}
            onChange={(event) => setForm({ ...form, price_text: event.target.value })}
          />
          <input
            className="input-base md:col-span-2"
            placeholder="Cover image URL"
            value={form.cover_image_url}
            onChange={(event) => setForm({ ...form, cover_image_url: event.target.value })}
          />
          <div className="md:col-span-2 flex flex-wrap items-center gap-4">
            <label className="text-sm text-slate-300">
              Upload image
              <input
                className="mt-2 block text-sm"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) void handleUpload(file);
                }}
              />
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(event) => setForm({ ...form, published: event.target.checked })}
              />
              Published
            </label>
          </div>
          <div className="md:col-span-2 flex gap-3">
            <Button type="submit">{editingId ? "Update Product" : "Create Product"}</Button>
            {editingId ? (
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setEditingId(null);
                  setForm(emptyProduct);
                }}
              >
                Cancel
              </Button>
            ) : null}
          </div>
        </form>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-white">Products</h2>
        <div className="mt-4 space-y-3">
          {loading ? <p className="text-sm text-slate-400">Loading...</p> : null}
          {items.map((item) => (
            <div key={item.id} className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-3">
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-slate-400">{item.category}</p>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" onClick={() => startEdit(item)}>
                  Edit
                </Button>
                <Button variant="ghost" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
