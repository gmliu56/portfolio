"use client";
/* eslint-disable react/react-in-jsx-scope */
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio | Guanming Liu</title>
        <meta name="description" content="Portfolio Page of Guanming Liu, a Software Developer that is proficient in Frontend Frameworks" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
