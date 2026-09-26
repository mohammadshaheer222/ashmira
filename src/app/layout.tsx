import React from "react";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./style/globals.css";
import { Header } from "@/components/layout/header";
import { fetchSiteTheme, themeToStyleVars } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashmira",
  description: "Ashmira",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = await fetchSiteTheme();
  const themeVars = themeToStyleVars(theme);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-white-soft antialiased`}
      style={themeVars}
    >
      <body className="min-h-full flex flex-col m-5 mob-land:m-3">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

