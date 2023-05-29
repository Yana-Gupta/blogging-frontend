import Footer from "@components/Footer"
import React from "react"
import dynamic from "next/dynamic"
import { Inter } from "next/font/google"
const Navbar = dynamic(() => import("@components/Navbar"), { ssr: false })
import "@styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
