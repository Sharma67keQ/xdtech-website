import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
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
      <body className={poppins.className}>
        <div className="min-h-screen bg-brand-dark">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
