import Navbar from "@/components/Navbar"
import Footer from "@components/Footer"
import React from "react"
import { Inter } from "next/font/google"
import "@styles/globals.css"


const inter = Inter({ subsets: ["latin"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900`}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
