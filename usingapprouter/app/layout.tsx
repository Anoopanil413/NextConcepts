import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "@/componets/nav";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <h1>Root layout</h1>
      <NavLinks/>
      <Suspense fallback={<Loading/>}>
        {children}
        </Suspense>
        <footer className='bg-indigo-300 '>This is root footer</footer>
        </body>
        
    </html>
  );
}
