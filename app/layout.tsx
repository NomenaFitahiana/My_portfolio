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