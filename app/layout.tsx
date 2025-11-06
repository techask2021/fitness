import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free BMI & Nutrition Calculator | Fitness Friendly Recipes",
  description: "Calculate your BMI instantly and get personalized daily nutrition recommendations. Free online tools for body mass index and calorie needs. Trusted by health-conscious individuals for accurate health calculations.",
  keywords: "BMI calculator, nutrition calculator, daily calories, macronutrients, health calculator, fitness calculator, body mass index, calorie calculator, macro calculator",
  authors: [{ name: "Fitness Friendly Recipes" }],
  creator: "Fitness Friendly Recipes",
  publisher: "Fitness Friendly Recipes",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fitnessfriendlyrecipes.online',
    siteName: 'Fitness Friendly Recipes',
    title: 'Free BMI & Nutrition Calculator | Fitness Friendly Recipes',
    description: 'Calculate your BMI and get personalized nutrition recommendations. Free, accurate, and easy-to-use health calculators.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free BMI & Nutrition Calculator',
    description: 'Calculate your BMI and get personalized nutrition recommendations.',
  },
  verification: {
    // Add your verification codes here when available
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3307149880993187"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
