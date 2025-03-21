import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lobster } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Foodieland - Order Food Online from Top Restaurants",
  description:
    "Foodieland, your go-to platform for ordering food online. Discover a wide variety of restaurants, enjoy fast delivery, and get your favorite meals delivered straight to your door!",
  keywords:
    "online food ordering, Foodieland, restaurant delivery, fast food, meal delivery",
  openGraph: {
    title: "Foodieland - A Fresh Take on Food Ordering",
    description:
      "Order your favorite meals from top restaurants with Foodieland and enjoy quick, reliable delivery to your doorstep.",
    url: "https://foodieland-vert.vercel.app/",
    siteName: "Foodieland",
    images: [
      {
        url: "https://foodieland-vert.vercel.app/foodieland.png",
        width: 1200,
        height: 630,
        alt: "Foodieland - Online Food Ordering Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lobster.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
