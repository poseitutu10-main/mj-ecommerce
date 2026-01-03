import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = JetBrains_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "MJ Shop",
  description: "Shopping made simple with MJ Shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
