import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Sachin Gupta - IoT Developer Portfolio",
  description:
    "Experienced IoT Developer specializing in smart systems, embedded programming, and cloud integration. Explore my projects and expertise in connecting the physical and digital worlds.",
  generator: "v0.dev",
  keywords: [
    "IoT Developer",
    "Sachin Gupta",
    "Embedded Systems",
    "Smart Devices",
    "Arduino",
    "ESP32",
    "Cloud Integration",
  ],
  authors: [{ name: "Sachin Gupta" }],
  creator: "Sachin Gupta",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
