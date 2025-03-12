import type { Metadata } from "next";
import "./globals.css";
import {Archivo} from 'next/font/google' //using Next.js's built-in Google Fonts optimization feature.

const archivo = Archivo({
  display:'swap',
  weight:'variable',
  subsets:["latin"],
  variable:"--font-archivo"
})

export const metadata: Metadata = {
  title: "Minimal Single Page Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} font-sans antialiased bg-stone-200 text-stone-900`}>{children}</body>
    </html>
  );
}
