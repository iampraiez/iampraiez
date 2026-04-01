import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://iampraiez.vercel.app"),
  title: "Praise Olaoye | Full-Stack Software Engineer & AI Systems Architect",
  description:
    "Software Engineer specializing in production-grade, AI-powered systems. Expert in architecting real-time platforms, distributed pipelines, and high-performance APIs across TypeScript and Flutter ecosystems.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI Systems Architect",
    "Real-time Systems",
    "TypeScript",
    "Next.js",
    "Flutter",
    "NestJS",
    "Distributed Systems",
    "Praise Olaoye",
  ],
  authors: [{ name: "Praise Olaoye" }],
  creator: "Praise Olaoye",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iampraiez.vercel.app",
    siteName: "Praise Olaoye Portfolio",
    title: "Praise Olaoye | SWE",
    description:
      "Software Engineer specializing in production-grade, AI-powered systems. Expert in architecting real-time platforms and high-performance APIs.",
    images: [
      {
        url: "/gojo.jpeg",
        width: 1200,
        height: 630,
        alt: "Praise Olaoye - SWE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praise Olaoye | Full-Stack Software Engineer",
    description:
      "Architecting production-grade, AI-powered systems and high-performance platforms.",
    images: ["/gojo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/gojo.jpeg",
    apple: "/gojo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
