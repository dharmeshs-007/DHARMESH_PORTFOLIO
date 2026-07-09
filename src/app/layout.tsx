import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharmesh Singh | Frontend Developer Portfolio",
  description: "Professional portfolio of Dharmesh Singh, a Frontend Developer specialized in Vue.js, Nuxt.js, Next.js, and Tailwind CSS. Showcase of scalable, production-grade applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-screen text-slate-100 flex flex-col bg-[#030014]">
        {/* Ambient background gradients and grid */}
        <div className="bg-ambient" />
        <div className="bg-grid-overlay" />
        {children}
      </body>
    </html>
  );
}
