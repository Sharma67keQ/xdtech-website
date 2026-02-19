import { PageTransition } from "@/components/PageTransition";
import { CareersPageClient } from "@/components/sections/CareersPageClient";

export const metadata = {
  title: "Careers",
  description: "Join XD TECH and build world-class technology for global impact."
};

export default function CareersPage() {
  return (
    <PageTransition>
      <CareersPageClient />
    </PageTransition>
  );
}
