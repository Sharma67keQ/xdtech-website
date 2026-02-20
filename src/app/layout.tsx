import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-orbitron"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space"
});

export const metadata: Metadata = {
  title: {
    default: "XD TECH | Xalinta Dhibaatoyinka",
    template: "%s | XD TECH"
  },
  description: "XD TECH builds premium software, hardware, and smart devices for a connected world.",
  metadataBase: new URL("https://xdtech.example")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
        <div className="min-h-screen bg-lab-bg font-[var(--font-space)]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
