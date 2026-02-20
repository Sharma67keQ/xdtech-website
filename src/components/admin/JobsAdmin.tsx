"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Job } from "@/lib/types";

const emptyJob = {
  title: "",
  location: "",
  type: "",
  description: "",
  apply_url: "",
  published: false
};

export function JobsAdmin() {
  const [items, setItems] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<typeof emptyJob>(emptyJob);
  const [editingId, setEditingId] = useState<string | null>(null);

  const loadItems = async () => {
    setLoading(true);
    const response = await fetch("/api/admin/jobs");
    const data = await response.json();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    void loadItems();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/admin/jobs", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingId ? { id: editingId, ...form } : form)
    });

    if (response.ok) {
      setForm(emptyJob);
      setEditingId(null);
      await loadItems();
    }
  };

  const startEdit = (item: Job) => {
    setEditingId(item.id);
    setForm({
      title: item.title ?? "",
      location: item.location ?? "",
      type: item.type ?? "",
      description: item.description ?? "",
      apply_url: item.apply_url ?? "",
      published: Boolean(item.published)
    });
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/jobs?id=${id}`, { method: "DELETE" });
    await loadItems();
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-semibold text-white">Create / Edit Job</h2>
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
            placeholder="Location"
            value={form.location}
            onChange={(event) => setForm({ ...form, location: event.target.value })}
          />
          <input
            className="input-base"
            placeholder="Type"
            value={form.type}
            onChange={(event) => setForm({ ...form, type: event.target.value })}
          />
          <input
            className="input-base"
            placeholder="Apply URL"
            value={form.apply_url}
            onChange={(event) => setForm({ ...form, apply_url: event.target.value })}
          />
          <textarea
            className="input-base md:col-span-2 min-h-[140px]"
            placeholder="Description"
            value={form.description}
            onChange={(event) => setForm({ ...form, description: event.target.value })}
          />
          <label className="flex items-center gap-2 text-sm text-slate-300 md:col-span-2">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(event) => setForm({ ...form, published: event.target.checked })}
            />
            Published
          </label>
          <div className="md:col-span-2 flex gap-3">
            <Button type="submit">{editingId ? "Update Job" : "Create Job"}</Button>
            {editingId ? (
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setEditingId(null);
                  setForm(emptyJob);
                }}
              >
                Cancel
              </Button>
            ) : null}
          </div>
        </form>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-white">Jobs</h2>
        <div className="mt-4 space-y-3">
          {loading ? <p className="text-sm text-slate-400">Loading...</p> : null}
          {items.map((item) => (
            <div key={item.id} className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-3">
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-slate-400">
                  {item.location} {item.type ? `• ${item.type}` : ""}
                </p>
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
