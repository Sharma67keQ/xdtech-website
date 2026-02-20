"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import type { Job } from "@/lib/types";

interface FormState {
  name: string;
  email: string;
  role: string;
  message: string;
}

export function CareersPageClient({ jobs }: { jobs: Job[] }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    role: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = "Valid email is required";
    }
    if (!form.role.trim()) nextErrors.role = "Role is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      try {
        setStatus("loading");
        const response = await fetch("/api/apply", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });

        if (!response.ok) throw new Error("Request failed");

        setStatus("success");
        setOpen(false);
        setForm({ name: "", email: "", role: "", message: "" });
      } catch {
        setStatus("error");
      }
    }
  };

  return (
    <Container className="space-y-12 py-16">
      <SectionTitle
        eyebrow="Careers"
        title="Work with a global, mission-first team"
        description="We hire for talent, integrity, and a focus on building technology people trust."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {jobs.map((role) => (
          <Card key={role.id} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{role.title}</h3>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="rounded-full border border-slate-800 px-3 py-1">{role.location}</span>
              <span className="rounded-full border border-slate-800 px-3 py-1">{role.type}</span>
            </div>
            <Button onClick={() => {
              setForm((prev) => ({ ...prev, role: role.title }));
              setOpen(true);
            }}>
              Apply Now
            </Button>
          </Card>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Apply to XD TECH">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              className="input-base"
              placeholder="Full name"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
            {errors.name ? <p className="mt-2 text-xs text-red-400">{errors.name}</p> : null}
          </div>
          <div>
            <input
              className="input-base"
              placeholder="Email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
            {errors.email ? <p className="mt-2 text-xs text-red-400">{errors.email}</p> : null}
          </div>
          <div>
            <input
              className="input-base"
              placeholder="Role"
              value={form.role}
              onChange={(event) => setForm({ ...form, role: event.target.value })}
            />
            {errors.role ? <p className="mt-2 text-xs text-red-400">{errors.role}</p> : null}
          </div>
          <div>
            <textarea
              className="input-base min-h-[120px]"
              placeholder="Tell us about your work"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
            />
            {errors.message ? <p className="mt-2 text-xs text-red-400">{errors.message}</p> : null}
          </div>
          <div className="flex items-center gap-4">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Submit Application"}
            </Button>
            {status === "success" ? (
              <p className="text-sm text-emerald-400">Application submitted.</p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-red-400">Submission failed. Try again.</p>
            ) : null}
          </div>
        </form>
      </Modal>
    </Container>
  );
}
