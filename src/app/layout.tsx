"use client"
import Navbar from "@/components/Navbar"
import Footer from "@components/Footer"
import React from "react"
import { Inter } from "next/font/google"
import "@styles/globals.css"


const inter = Inter({ subsets: ["latin"] })

export const UserContext = React.createContext({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let userToken: any
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900`}>
        <UserContext.Provider value={userToken}>
          <Navbar />
          {children}
          <Footer />
        </UserContext.Provider>
      </body>
    </html>
  )
}
