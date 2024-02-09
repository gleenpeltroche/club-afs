import type { Metadata } from "next";
import "./globals.css";
import { barlow } from "@/fonts/Barlow";

export const metadata: Metadata = {
  title: "Club AFS",
  description: "Escuela de futbol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${barlow.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
