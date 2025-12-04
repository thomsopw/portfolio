import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Perfect Pixels - Modern Web Development",
  description: "Crafting digital experiences that convert. From product launches to SaaS platforms.",
  keywords: ["web development", "Perfect Pixels", "website design", "SaaS", "product landing pages"],
  authors: [{ name: "Perfect Pixels" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

