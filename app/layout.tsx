import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Azka Mumtaz | Portfolio",
  description: "azkanab's Portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="png" />
        <link rel="mask-icon" href="/apple-touch-icon.png" />
      </head>

      <body className="bg-black">{children}</body>
    </html>
  )
}
