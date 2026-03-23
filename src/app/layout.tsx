import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VenueAI — Умный Консьерж Твоих Впечатлений",
  description: "Идеальные маршруты и места для отдыха в стиле Киберпанк",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-background text-foreground selection:bg-neon-cyan selection:text-black">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(188,19,254,0.05)_0%,rgba(0,0,0,0)_50%)] pointer-events-none" />
        <main className="relative z-10 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
