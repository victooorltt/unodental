import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Uno Dental | Clínica Dental en Valladolid",
    template: "%s | Uno Dental",
  },
  description:
    "Clínica dental en Valladolid. Odontología integral, implantes, ortodoncia, estética dental y odontopediatría. C/ López Gómez 14. Desde 2010 en boca de todos.",
  icons: {
    icon: "/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white text-zinc-900 font-sans antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
