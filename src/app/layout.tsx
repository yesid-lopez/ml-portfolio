import { Navbar } from "@/components/navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yesid López | AI Engineer & ML Engineer",
  description:
    "Portfolio of Yesid López, AI Engineer and ML Engineer building production-ready AI systems.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      {isProd && (
        <Script
          defer
          src="https://umami.yesidlopez.de/umami"
          data-website-id="8277ad40-9ba5-4f1f-bae7-f1d7bd9dae38"
        />
      )}
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
