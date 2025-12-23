import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Knowledge Base (Mini)",
  description:
    "A mini editorial Next.js capstone with simulated AI answers and a minty, airy experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <div className="relative min-h-screen overflow-hidden text-slate-900">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute -right-12 top-24 h-64 w-64 rounded-full bg-emerald-100/50 blur-[110px]" />
            <div className="absolute bottom-10 left-24 h-32 w-32 rounded-full bg-white/60 blur-3xl" />
          </div>
          <div className="relative flex min-h-screen flex-col">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
