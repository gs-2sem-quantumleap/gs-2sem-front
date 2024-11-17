import type { Metadata } from "next";
import "./globals.css";
import Hero from "@/components/Hero/Hero";
import Rodape from "@/components/Rodape/Rodape";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});



export const metadata: Metadata = {
  title: "GreenMeter",
  description: "O game do seu condomínio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body>
        <Hero/>
        {children}
        {/* <Rodape/> */}
      </body>
    </html>
  );
}
