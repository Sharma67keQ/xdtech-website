"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/lib/types";

const productTabs = ["Apps", "Wearables", "Hardware", "Coming Soon"] as const;

export function ProductsPageClient({ products }: { products: Product[] }) {
  const [activeTab, setActiveTab] = useState<(typeof productTabs)[number]>("Apps");

  const filtered = useMemo(
    () => products.filter((product) => product.category === activeTab),
    [activeTab]
  );

  return (
    <Container className="space-y-12 py-16">
      <SectionTitle
        eyebrow="Portfolio"
        title="Products built for global impact"
        description="Designed to scale across industries with privacy, reliability, and premium experiences."
      />

      <div className="flex flex-wrap gap-3">
        {productTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              activeTab === tab
                ? "border-lab-blue bg-lab-blue/10 text-lab-blue"
                : "border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((product) => (
          <Card key={product.id} className="flex h-full flex-col gap-6">
            <div className="aspect-[16/9] rounded-lg bg-slate-900/70" />
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">{product.title}</h3>
              <p className="text-sm text-slate-300">{product.description}</p>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-400">
              {(product.features ?? []).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Button href={product.title === "Daryeel Plus" ? "/products/daryeel-plus" : "/products"}>
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
