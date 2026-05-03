import { Navbar } from "@/components/navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.yesidlopez.de";
const title = "Yesid López | AI Engineer & ML Engineer";
const description =
  "Portfolio of Yesid López, AI Engineer and ML Engineer building production-ready AI systems, machine learning applications, and data-driven products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Yesid López",
  },
  description,
  applicationName: "Yesid López Portfolio",
  authors: [{ name: "Yesid López", url: siteUrl }],
  creator: "Yesid López",
  alternates: {
    canonical: "/",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Yesid López Portfolio",
    title,
    description,
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Yesid López portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
