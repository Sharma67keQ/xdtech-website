import { PageTransition } from "@/components/PageTransition";
import { ContactPageClient } from "@/components/sections/ContactPageClient";

export const metadata = {
  title: "Contact",
  description: "Contact XD TECH for enterprise partnerships and product inquiries."
};

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactPageClient />
    </PageTransition>
  );
}
