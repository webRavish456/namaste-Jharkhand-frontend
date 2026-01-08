import {
    Poppins,
    Marcellus,
    Rambla,
    Rozha_One,
    Shantell_Sans,
    Aclonica,
  } from "next/font/google";
  
  export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    display: "swap",
  });
  
  export const marcellus = Marcellus({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-marcellus",
    display: "swap",
  });
  
  export const rambla = Rambla({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-rambla",
    display: "swap",
  });
  
  export const rozha = Rozha_One({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-rozha",
    display: "swap",
  });
  
  export const shantell = Shantell_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-shantell",
    display: "swap",
  });
  
  export const aclonica = Aclonica({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-aclonica",
    display: "swap",
  });
  