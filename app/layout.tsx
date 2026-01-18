import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  title: "Bharat Singh | Principal Frontend Engineer",
  description: "Senior-level 2026 portfolio specializing in high-performance React architecture and motion design.",
  keywords: ["Bharat Singh", "Frontend Engineer", "React", "Next.js", "Portfolio", "UI/UX"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bharatsingh.dev",
    title: "Bharat Singh | Principal Frontend Engineer",
    description: "Architecting the future of the web.",
    siteName: "Bharat Singh Portfolio"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${bricolage.variable} font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}