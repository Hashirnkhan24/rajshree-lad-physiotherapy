import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Rajashree Lad's Physiotherapy & Osteopathy Centre | Orthopedic Care, Mumbai",
  description: "Experience premium orthopedic care, physical therapy, and osteopathic treatment at Dr. Rajashree Lad's Centre in Dadar, Mumbai. Book consultations instantly.",
  keywords: ["Dr Rajashree Lad", "physiotherapy Mumbai", "osteopathy Dadar", "cranial osteopathy", "orthopedic care", "joint rehab", "spine clinic", "injury recovery"],
  authors: [{ name: "Dr. Rajashree Lad's Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-light-mint text-dark-text font-sans selection:bg-primary-teal/20 selection:text-dark-teal">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
