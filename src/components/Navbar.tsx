"use client"

import Link from "next/link"
import React, { use, useEffect } from "react"
import { useState } from "react"

// Icons
import CloseIcon from "@mui/icons-material/Close"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

// Methods
import { getUser } from "@api/auth/index"
import { deleteToken } from "@api/auth/index"

// next router
import { useRouter } from "next/navigation"

const Navbar = (): JSX.Element => {
  const user: any = getUser()

  // Theme state
  const [dark, setDark] = useState(false)

  // prompt message state
  const [promptMessage, setPromptMessage] = useState<string>("")

  const router = useRouter()

  const beforeLogin_SignUp = (): JSX.Element => {
    return (
      <div>
        <a href="/signin" className="uppercase px-4">
          Sign In
        </a>
        <a href="/signup" className="uppercase px-4">
          Sigin Up
        </a>
      </div>
    )
  }

  const prompt = (message: string): JSX.Element => {
    return (
      <div className="bg-orange-900 h-12 w-full flex align-center items-center justify-center my-auto">
        <h3>{message}</h3>
        <button onClick={() => setPromptMessage("")}>
          <CloseIcon />
        </button>
      </div>
    )
  }

  const afterSignIN = (): JSX.Element => {
    return (
      <div className="relative top-14 h-60 w-36">
        <div id="user-icon">
          <button
            className="p-0 rounded-full ring-2 ring-white bg-blue-700"
            onClick={() => {
              var options = document.getElementById("options")
              if (options?.classList.contains("hidden")) {
                options?.classList.remove("hidden")
                options?.classList.add("flex")
              } else if (options?.classList.contains("flex")) {
                options?.classList.remove("flex")
                options?.classList.add("hidden")
              }
            }}
          >
            <AccountCircleIcon sx={{ height: "52px", width: "52px" }} />
          </button>
        </div>
        <div className="hidden flex-col rounded bg-gray-200" id="options">
          <button
            className="py-1.5"
            onClick={() => {
              router.push(`/user/${user.id}`)
            }}
          >
            View Account
          </button>
          <button
            className="py-1.5"
            onClick={() => {
              const msg = deleteToken()
              setPromptMessage(msg)
              window.location.reload()
            }}
          >
            Logout
          </button>
        </div>
      </div>
    )
  }

  const ThemeChangeIcon = (): JSX.Element => {
    return (
      <button
        className={`h-10 w-10 ${
          dark ? "bg-black" : "bg-white"
        } rounded-full absolute top-8 right-8`}
        id="theme-change-btn"
        onClick={() => setDark(!dark)}
      >
        {dark && <LightModeIcon sx={{ color: "#ffffff" }} />}

        {!dark && <DarkModeIcon sx={{ color: "#000000" }} />}
      </button>
    )
  }

  return (
    <nav className={""} id="nav">
      {/* Modal  */}
      {promptMessage && prompt(promptMessage)}

      <div
        style={{ height: "160px" }}
        className="flex text-center items-center justify-around align-center h-full"
        id="nav-tools"
      >
        {/* Heading  */}
        <h1 className="text-xl lg:text-3xl font-bold uppercase" id="heading">
          GoodBlogs
        </h1>

        {/* Routes  */}
        <div className="font-semibold uppercase">
          <Link href="/" className="px-8">
            Home
          </Link>
          <Link href="/#read-blogs" className="px-8">
            Read Blogs
          </Link>
          <Link href="create" className="px-8">
            Create Blog
          </Link>

          <Link href="/about" className="px-8">
            About
          </Link>
        </div>

        {/* Login / Logout Route  */}
        {user ? afterSignIN() : beforeLogin_SignUp()}
      </div>

      {/* Theme changing icon  */}

      {ThemeChangeIcon()}
    </nav>
  )
}

export default Navbar
