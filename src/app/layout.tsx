import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Inter } from "next/font/google";
import "./globals.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yesid Lopez",
  description: "Yesid Lopez Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          domain="yesidlopez.de"
          customDomain="https://plausible-analytics.yesidlopez.de"
        />
      </head>
      <body className={inter.className}>
        <div>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="grow bg-black">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
