import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";

const inter = LocalFont({
  src: "./fonts/interVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Forque",
  description:
    "Forque is the all-in-one platform for developers to ask questions, share knowledge, and advance their careers. Powered by AI and a collaborative community, Forque offers a seamless experience to explore, learn, and grow as a developer while connecting with like-minded professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
