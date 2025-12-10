import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nazmul Hasan - Full Stack Developer & Student Leader",
  description:
    "Personal portfolio of Nazmul Hasan, a passionate CSE student and full-stack developer skilled in MERN stack, cloud infrastructure, and real-time applications. Experienced in leadership and teaching.",
  generator: "v0.app",
  authors: [{ name: "Nazmul Hasan" }],
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "Bangladesh",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nazmulhasan.dev",
    title: "Nazmul Hasan - Full Stack Developer & Student Leader",
    description:
      "Explore my portfolio showcasing full-stack development projects, leadership experience, and technical expertise.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nazmul Hasan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazmul Hasan - Full Stack Developer & Student Leader",
    description: "Full Stack Developer showcasing MERN stack, cloud, and leadership experience.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#55ccff",
  userScalable: true,
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#12142c" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f8f8f8" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
