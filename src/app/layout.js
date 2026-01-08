import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../component/footer";
import {
  poppins,
  marcellus,
  rambla,
  rozha,
  shantell,
  aclonica,
} from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
     </head>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${poppins.variable}
          ${marcellus.variable}
          ${rambla.variable}
          ${rozha.variable}
          ${shantell.variable}
          ${aclonica.variable}
        `}
        style={{
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
        suppressHydrationWarning
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
