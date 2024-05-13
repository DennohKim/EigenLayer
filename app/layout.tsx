import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/common/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eigen Layer",
  description: "Visuliazing Eigen Layer Metrics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col">
          <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <Nav />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
