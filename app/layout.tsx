import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["600", "400", "700"],
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description:
    "A Figma clone using Liveblocks & Fabric JS with real time collaborations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <Room>{children}</Room>
      </body>
    </html>
  );
}