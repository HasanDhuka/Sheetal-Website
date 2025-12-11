import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Next.js Enterprise Starter",
  description: "A premium Next.js 14 starter with TypeScript, Tailwind, Framer Motion, and Three.js",
  openGraph: {
    title: "Next.js Enterprise Starter",
    description: "A premium Next.js 14 starter with TypeScript, Tailwind, Framer Motion, and Three.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          inter.variable,
          playfair.variable,
          "font-sans antialiased bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
