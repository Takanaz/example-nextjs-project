import type { Metadata } from "next";

import "./styles/route.css";

export const metadata: Metadata = {
  title: "nextjs-unused-media-checker – Use Cases",
  description:
    "nextjs-unused-media-checker のデフォルト検知範囲を確認するための、参照パターン網羅ページ。",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "nextjs-unused-media-checker – Use Cases",
    description:
      "nextjs-unused-media-checker のデフォルト検知範囲を確認するための、参照パターン網羅ページ。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Used OG image (png)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.png"],
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
