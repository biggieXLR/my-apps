import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/componets/page 1/footer";



export const metadata: Metadata = {
  title: "Foodie",
  description: "Made by Brut#",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
         <Footer/>
      </body>
    </html>
  );
}
