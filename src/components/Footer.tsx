import Link from "next/link";
import { Container } from "./Container";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-lab-bg">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold tracking-[0.3em] text-white">XD TECH</p>
          <p className="text-sm text-slate-400">Xalinta Dhibaatoyinka</p>
          <p className="text-xs text-slate-500">Global engineering for smart, safe, and human-first technology.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-slate-400 md:grid-cols-3">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        (c) 2026 XD TECH. All rights reserved.
      </div>
    </footer>
  );
}
