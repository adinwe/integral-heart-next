import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Integral Heart Therapy — Yatong (Elias) | 整合心理治疗",
  description:
    "Integrative therapy for ADHD, trauma, and life transitions. EMDR, IFS, ACT, CBT, DBT. Bilingual English & Mandarin. Online across Australia. Registered Social Worker (AASW).",
  keywords: [
    "ADHD therapy Melbourne",
    "EMDR therapy Australia",
    "bilingual therapist Mandarin",
    "Chinese Australian therapist",
    "NDIS psychosocial support",
    "integrative therapy",
    "trauma therapy online",
    "social worker Melbourne",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
