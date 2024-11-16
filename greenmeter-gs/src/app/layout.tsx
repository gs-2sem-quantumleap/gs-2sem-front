import type { Metadata } from "next";
import "./globals.css";
import Hero from "@/components/Hero/Hero";
import Rodape from "@/components/Rodape/Rodape";



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
    <html lang="pt-br">
      <body>
        <Hero/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
