import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./sections/Nav";
import Footer from "./sections/Footer";


export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        
          <Navbar />
        
        {children}
        
          <Footer />
        
        </body>
    </html>
  );
}
