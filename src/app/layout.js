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


export const metadata = {
  title: "Namaste Jharkhand – Explore the Soul of Jharkhand",
  description:
    "Explore the untamed beauty of Jharkhand – waterfalls, forests, temples, tribal culture, heritage, and top tourist destinations. Plan your Jharkhand journey with Namaste Jharkhand.",
  keywords: [
    "Jharkhand tourism",
    "Visit Jharkhand",
    "Jharkhand temples",
    "Jharkhand waterfalls",
    "Jharkhand culture",
    "Jharkhand travel guide",
  ],
  openGraph: {
    title: "Namaste Jharkhand – Explore the Soul of Jharkhand",
    description:
      "Discover Jharkhand’s waterfalls, forests, temples, tribal culture, and heritage. Your complete guide to Jharkhand tourism.",
    url: "https://namastejharkhand.in",
    siteName: "Namaste Jharkhand",
    images: [
      {
        url: "/parasnath-mandir.webp",
        width: 1200,
        height: 630,
        alt: "Parasnath Temple Jharkhand",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


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
