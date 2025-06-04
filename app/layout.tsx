import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dennes Kohl – Portfolio & Projects",
  description: "The personal portfolio of Dennes Kohl: Backend Development, projects, tech stack, resume, and contact.",
  metadataBase: new URL("https://kohld.github.io"),
  openGraph: {
    title: "Dennes Kohl – Portfolio & Projects",
    description: "The personal portfolio of Dennes Kohl: Backend Development, projects, tech stack, resume, and contact.",
    url: "https://kohld.github.io/",
    siteName: "Dennes Kohl Portfolio",
    locale: "en_EN",
    type: "website",
    images: [
      {
        url: "/placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Dennes Kohl Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennes Kohl – Portfolio & Projects",
    description: "The personal portfolio of Dennes Kohl: Backend Development, projects, tech stack, resume, and contact.",
    images: ["/placeholder.svg"],
    creator: "@kohld",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  applicationName: "Dennes Kohl Portfolio",
  generator: "Next.js 14",
  keywords: [
    "Dennes Kohl",
    "Portfolio",
    "Web Development",
    "Full-Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Projects",
    "Resume"
  ],
  authors: [{ name: "Dennes Kohl", url: "https://kohld.github.io/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
