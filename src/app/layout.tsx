import clsx from "clsx";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGPT Test",
  description: "ChatGPT Test Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(nunito.className, "bg-slate-800")}>{children}</body>
    </html>
  );
}
