
import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/Toast";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  title: "Bharat Singh | Principal Frontend Architect",
  description: "Senior-level portfolio specializing in high-performance React architecture and luxury digital experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bharatsingh.dev",
    title: "Bharat Singh | Digital Excellence",
    description: "Crafting legendary web experiences with motion and precision.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${bricolage.variable} font-sans antialiased overflow-x-hidden selection:bg-primary/20`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ToastProvider>
            <SmoothScroll>
              <div className="noise-overlay" />
              {children}
            </SmoothScroll>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
