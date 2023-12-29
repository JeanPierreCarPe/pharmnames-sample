import Navbar from "./components/Navbar";
import "./globals.css";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-bebas",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
