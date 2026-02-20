"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { NewsItem } from "@/lib/types";

const emptyNews = {
  title: "",
  summary: "",
  body: "",
  tags: "",
  cover_image_url: "",
  published: false
};

export function NewsAdmin() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<typeof emptyNews>(emptyNews);
  const [editingId, setEditingId] = useState<string | null>(null);

  const loadItems = async () => {
    setLoading(true);
    const response = await fetch("/api/admin/news");
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
    formData.append("table", "news");
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
      tags: form.tags ? form.tags.split(",").map((item) => item.trim()) : []
    };

    const response = await fetch("/api/admin/news", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingId ? { id: editingId, ...payload } : payload)
    });

    if (response.ok) {
      setForm(emptyNews);
      setEditingId(null);
      await loadItems();
    }
  };

  const startEdit = (item: NewsItem) => {
    setEditingId(item.id);
    setForm({
      title: item.title ?? "",
      summary: item.summary ?? "",
      body: item.body ?? "",
      tags: item.tags?.join(", ") ?? "",
      cover_image_url: item.cover_image_url ?? "",
      published: Boolean(item.published)
    });
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/news?id=${id}`, { method: "DELETE" });
    await loadItems();
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-semibold text-white">Create / Edit News</h2>
        <form className="mt-4 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <input
            className="input-base md:col-span-2"
            placeholder="Title"
            value={form.title}
            onChange={(event) => setForm({ ...form, title: event.target.value })}
            required
          />
          <input
            className="input-base md:col-span-2"
            placeholder="Summary"
            value={form.summary}
            onChange={(event) => setForm({ ...form, summary: event.target.value })}
          />
          <textarea
            className="input-base md:col-span-2 min-h-[160px]"
            placeholder="Body"
            value={form.body}
            onChange={(event) => setForm({ ...form, body: event.target.value })}
          />
          <input
            className="input-base md:col-span-2"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={(event) => setForm({ ...form, tags: event.target.value })}
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
            <Button type="submit">{editingId ? "Update News" : "Create News"}</Button>
            {editingId ? (
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setEditingId(null);
                  setForm(emptyNews);
                }}
              >
                Cancel
              </Button>
            ) : null}
          </div>
        </form>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-white">News</h2>
        <div className="mt-4 space-y-3">
          {loading ? <p className="text-sm text-slate-400">Loading...</p> : null}
          {items.map((item) => (
            <div key={item.id} className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-3">
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-slate-400">{item.tags?.join(", ")}</p>
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
