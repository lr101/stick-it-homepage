import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "~/components/TopNav";

export const metadata: Metadata = {
  title: "Stick-It Map",
  description: "The app to share stickers your stickers",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-gradient-to-b from-[#2e026d] to-[#221d38] text-white">
      <TopNav />
      {children}</body>
    </html>
  );
}
