import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Gasoek_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gasoekOne = Gasoek_One({
  variable: "--font-gaseok-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bernard's Portfolio",
  description: "v2 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gasoekOne.variable} antialiased`}
      >
        {children}
        <div className="noise-overlay"></div>

        <svg>
          <filter id="noise">
            <feTurbulence type="turbulence" baseFrequency={0.65}/>
          </filter>
        </svg>
      </body>
    </html>
  );
}
