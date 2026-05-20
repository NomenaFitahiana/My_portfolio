import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Jost} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Nomena Fitahiana | Full Stack Developer",

  description:
    "Portfolio of Nomena Fitahiana, full stack developer passionate about building modern and elegant web applications.",

  keywords: [
    "Nomena Fitahiana",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Spring Boot",
    "Java",
    "TypeScript",
    "Portfolio",
  ],

  authors: [{ name: "Nomena Fitahiana" }],

  creator: "Nomena Fitahiana",

  openGraph: {
    title: "Nomena Fitahiana | Full Stack Developer",

    description:
      "Modern portfolio built with Next.js, TypeScript and thoughtful design.",

    url: "https://nomenafitahiana.vercel.app",

    siteName: "Nomena's Portfolio",

    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Nomena Fitahiana's Portfolio Preview",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Nomena Fitahiana | Full Stack Developer",

    description:
      "Modern portfolio built with Next.js and TypeScript.",

    images: ["/images/preview.png"],
  },

  metadataBase: new URL("https://nomenafitahiana.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"
      className={`${cormorant.variable} ${jost.variable}`} >

      <body>
        <Navbar/>

        {children}
        
        <Footer />

      </body>
    </html>
  );
}