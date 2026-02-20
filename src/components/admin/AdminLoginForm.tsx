"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/Button";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");

    const supabase = supabaseClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setStatus("error");
      return;
    }

    router.replace("/admin");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        className="input-base"
        placeholder="Admin email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        type="email"
      />
      <input
        className="input-base"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        type="password"
      />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Signing in..." : "Sign In"}
      </Button>
      {status === "error" ? (
        <p className="text-sm text-red-400">Invalid credentials.</p>
      ) : null}
    </form>
  );
}
