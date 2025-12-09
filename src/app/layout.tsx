import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cloverbelt Construction | Premier Construction Services in Cadott, WI",
  description: "Licensed, bonded, and insured construction company serving Wisconsin since 2001. Specializing in residential, commercial, and agricultural construction, concrete work, and excavation. A+ BBB rated.",
  keywords: [
    "construction company Cadott WI",
    "Wisconsin construction services",
    "concrete work Wisconsin",
    "agricultural construction",
    "commercial construction",
    "residential construction",
    "excavation services",
    "Cloverbelt Construction",
    "Chippewa Valley construction",
  ],
  authors: [{ name: "Cloverbelt Construction LLC" }],
  creator: "Cloverbelt Construction LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cloverbeltconstructionwi.com",
    siteName: "Cloverbelt Construction",
    title: "Cloverbelt Construction | Premier Construction Services in Cadott, WI",
    description: "Licensed, bonded, and insured construction company serving Wisconsin since 2001. Specializing in residential, commercial, and agricultural construction.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cloverbelt Construction - Building Wisconsin's Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cloverbeltconsn",
    title: "Cloverbelt Construction | Premier Construction Services",
    description: "Licensed, bonded, and insured construction company serving Wisconsin since 2001.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
