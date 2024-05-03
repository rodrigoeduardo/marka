import type { Metadata } from "next";
import { Inter, PT_Sans_Narrow } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/utils/tailwindUtils";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans-narrow",
});

export const metadata: Metadata = {
  title: "Marka | Artefatos Escolares",
  description: "Artefatos Escolares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(inter.className, ptSansNarrow.className)}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
