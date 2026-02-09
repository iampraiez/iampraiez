import React from "react";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "sonner";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praise Olaoye | Backend Developer",
  description: "Portfolio of Praise Olaoye, a Backend Developer",
  icons: {
    icon: "/gojo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): any {
  const Html = "html" as any;
  const Body = "body" as any;
  const TProvider = ThemeProvider as any;
  const Toast = Toaster as any;

  return (
    <Html lang="en">
      <Body className={`${firaCode.className} ${firaCode.variable} antialiased`}>
        <TProvider>
          <Toast position="top-right" richColors />
          {children}
        </TProvider>
      </Body>
    </Html>
  );
}
