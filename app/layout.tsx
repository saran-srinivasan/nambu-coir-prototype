import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-heading" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Nambu Coir - Premium Eco-Friendly Coconut Coir Products",
  description: "Leading manufacturer of organic coco peat, coir blocks, grow bags & chips. Sustainable horticultural solutions from Tamil Nadu, India.",
  metadataBase: new URL('https://nambucoir.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, openSans.variable, "font-sans antialiased bg-background text-foreground min-h-screen flex flex-col")}>
        {children}
      </body>
    </html>
  );
}
