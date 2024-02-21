import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Providers } from "./Providers";

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <Providers> 
      <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
