import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bread",
    template: "%s | Bread",
  },
  description:
    "A restaurant-inspired Bible experience serving Scripture, prayer, encouragement, and hope.",
  keywords: [
    "Bible",
    "Christianity",
    "Jesus",
    "Scripture",
    "Prayer",
    "Faith",
    "Bread",
  ],
  authors: [
    {
      name: "Anonymous Kai",
    },
  ],
  creator: "Anonymous Kai",
  applicationName: "Bread",
  metadataBase: new URL("https://bread-of-life-cafe-sxhi.vercel.app"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
