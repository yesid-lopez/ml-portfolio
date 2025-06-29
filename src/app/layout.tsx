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
  title: "Yesid Lopez",
  description: "Yesid Lopez Portfolio",
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
          data-website-id="2ac63faa-72fd-401d-be7e-f2d9e8a4bdc7"
        />
      )}
      <body className="bg-black">
        <div>
          <div className="relative w-full h-[100vh]">
            <Navbar />
            <div className="grow w-full h-[100vh]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
