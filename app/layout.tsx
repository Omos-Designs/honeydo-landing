import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "HoneyDo - Turn Chores Into Teamwork",
  description:
    "The fun way for couples to manage household chores with competitive points, weekly winners, and prizes.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased relative`}>
        {/* Global gradient background */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#4A90E2] via-[#7B68EE] to-[#FF69B4] opacity-10 -z-10" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
