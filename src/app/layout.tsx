import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ve Meetings, the meeting tool that remembers them all",
  description: "Ve connects your meetings, your email, and your history, so context never resets.",
  icons: { icon: "https://us.images.ve.ai/public/dashboard/image.png", apple: "https://us.images.ve.ai/public/dashboard/image.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
