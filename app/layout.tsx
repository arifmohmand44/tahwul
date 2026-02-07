import React from "react";
import type { Metadata } from "next";
import { Exo } from "next/font/google";

import "./globals.css";

const _exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tahwul",
    template: "%s | Tahwul",
  },
  description: "Tahwul description",
  generator: "Arif Ullah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${_exo.className} antialiased`}>{children}</body>
    </html>
  );
}
