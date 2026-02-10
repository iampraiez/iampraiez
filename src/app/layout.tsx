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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} ${firaCode.variable} antialiased`}
      >
        <ThemeProvider>
          <Toaster position="top-right" richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
