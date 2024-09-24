import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "normalize.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "FMS by TKDN",
  description: "Fleet Management System by TKDN",
};

const ns = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${ns.variable} font-sans `}>
        {children}
      </body>
    </html>
  );
}
