import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Progress with UNITAR & Save Up To RM10,000!",
  description:
    "Exclusive alumni voucher for diploma graduates. Fast-track your Bachelor's degree with special discounts.",
  openGraph: {
    title: "Progress with UNITAR & Save Up To RM10,000!",
    description:
      "Exclusive alumni voucher for diploma graduates. Fast-track your Bachelor's degree with special discounts.",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "UNITAR Alumni Progression - Diploma"
      }
    ]
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)"
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml"
      }
    ],
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-F8XEQPNCWS" />
      <body className={`font-sans antialiased`}>
        <div
          id="nav-placeholder"
          className="bg-white top-0 left-0 right-0 fixed z-50 h-14 items-center justify-center px-4 py-2 shadow-md flex gap-2"
        >
          <Image
            src="/UIU_logo.png"
            alt="UNITAR Alumni Progression"
            width={100}
            height={100}
            className="object-contain h-10 w-auto mt-1"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
