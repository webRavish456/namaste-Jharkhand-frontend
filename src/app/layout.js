import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Namaste Jharkhand - Explore the soul of Jharkhand",
  description: "Experience the untamed beauty of Jharkhand - where ancient forests meet cascading waterfalls, tribal culture thrives, and adventure awaits at every turn.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Acronica:wght@400&family=Shantell+Sans:wght@300;400;500;600;700;800&family=Aclonica:wght@400&family=Marcellus:wght@400&family=Poppins:wght@300;400;500;600;700;800;900&family=Rozha+One&family=Rambla:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}}
        suppressHydrationWarning
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
