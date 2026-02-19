"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const faqs = [
  {
    question: "How fast can we start a pilot?",
    answer: "Most pilots can start within 4-6 weeks depending on integration requirements."
  },
  {
    question: "Do you support enterprise security reviews?",
    answer: "Yes, we provide full security documentation and tailored compliance support."
  },
  {
    question: "Where is XD TECH available?",
    answer: "We support global deployments with regional hosting and service teams."
  }
];

export function ContactPageClient() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build the future together"
          description="Tell us about your needs and we will connect you with the right team."
        />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="input-base"
            placeholder="Full name"
            name="name"
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
          <input
            className="input-base"
            placeholder="Email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
          <input
            className="input-base"
            placeholder="Subject"
            name="subject"
            required
            value={form.subject}
            onChange={(event) => setForm({ ...form, subject: event.target.value })}
          />
          <textarea
            className="input-base min-h-[140px]"
            placeholder="Message"
            name="message"
            required
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />
          <div className="flex items-center gap-4">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
            {status === "success" ? (
              <p className="text-sm text-emerald-400">Message sent. We'll respond shortly.</p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-red-400">Something went wrong. Try again.</p>
            ) : null}
          </div>
        </form>
      </div>
      <div className="space-y-6">
        <Card className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Direct</p>
          <p className="text-sm text-slate-300">WhatsApp: +000 000 000 000</p>
          <p className="text-sm text-slate-300">Email: hello@xdtech.example</p>
        </Card>
        <Card className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">FAQ</p>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-800 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Card>
      </div>
    </Container>
  );
}
