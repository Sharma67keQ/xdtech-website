import Link from "next/link";
import { Container } from "@/components/Container";

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/news", label: "News" },
  { href: "/admin/jobs", label: "Jobs" }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-lab-bg">
      <Container className="grid gap-6 py-10 lg:grid-cols-[260px_1fr]">
        <aside className="card-sheen sticky top-24 h-fit rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-lab-blue">Admin</p>
          <h2 className="mt-3 text-lg font-semibold text-white">XD TECH Console</h2>
          <nav className="mt-6 flex flex-col gap-3 text-sm text-slate-300">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 transition hover:bg-white/5">
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="space-y-6">{children}</main>
      </Container>
    </div>
  );
}
