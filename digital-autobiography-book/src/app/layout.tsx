import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Kavivanar } from "next/font/google";
import { book } from "@/data/book";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Tamil font
const tamil = Kavivanar({
  subsets: ["tamil"],
  weight: "400",
  variable: "--font-tamil",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${book.title} — ${book.author.name}`,
  description: book.subtitle ?? book.cover.subtitle ?? "A digital book",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${tamil.variable}`}
    >
      <body className="bg-[#150d10] font-sans antialiased">{children}</body>
    </html>
  );
}