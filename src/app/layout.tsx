import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
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
        url: "/images/construction-1.jpg",
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
    images: ["/images/construction-1.jpg"],
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
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
