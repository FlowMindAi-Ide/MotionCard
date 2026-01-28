import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motioncard.flowmindai.in"),
  title: {
    default: "MotionCard | Open Source Motion Components",
    template: "%s | MotionCard",
  },
  description: "A comprehensive collection of beautiful, animated React components aiming to enhance user experience. Built with Next.js, Framer Motion, and Tailwind CSS.",
  keywords: [
    "React",
    "Next.js",
    "Framer Motion",
    "Tailwind CSS",
    "Components",
    "UI Library",
    "Animation",
    "Open Source",
    "Motion",
    "Design System"
  ],
  authors: [
    {
      name: "FlowMindAi",
      url: "https://github.com/FlowMindAi-Ide",
    },
    {
      name: "Vinay Singh",
      url: "https://github.com/vinaysinghb",
    }
  ],
  creator: "Vinay Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://motioncard.flowmindai.in",
    title: "MotionCard | Open Source Motion Components",
    description: "A comprehensive collection of beautiful, animated React components aiming to enhance user experience.",
    siteName: "MotionCard",
    images: [
      {
        url: "/og-image.png", // Assuming we might add one, or it will use default if available 
        width: 1200,
        height: 630,
        alt: "MotionCard - Premium Motion Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MotionCard | Open Source Motion Components",
    description: "A comprehensive collection of beautiful, animated React components aiming to enhance user experience.",
    creator: "@vinaysinghb", // Placeholder if user has one, using name based on github
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          outfit.variable
        )}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
