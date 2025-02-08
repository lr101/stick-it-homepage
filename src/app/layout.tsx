import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "~/components/TopNav";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "~/components/ScrollToTop";
import Footer from "~/components/Footer";


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
      <body className="bg-gradient-to-b from-[#ffdca7] to-[#ff9900] text-black">
      <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
        <TopNav />
        {children}
        <ScrollToTop />
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
