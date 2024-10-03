import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ReactQueryProvider from "#/shared/utils/react-query/ReactQueryProvider";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.guess();

import "normalize.css";
import "./build.css";
import "./globals.css";
import { Toaster } from "#/shared/components/ui/toaster";

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
        <RootComponent>{children}</RootComponent>
        <Toaster />
      </body>
    </html>
  );
}

function RootComponent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </>
  );
}
