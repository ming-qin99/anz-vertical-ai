import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Verticalised AI in Australia & New Zealand",
  description:
    "Mapping how ANZ startups are building deep, purpose-built AI for specific industries — and what makes the best ones defensible. A landscape analysis for Square Peg Capital.",
  authors: [{ name: "Ming Qin" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
