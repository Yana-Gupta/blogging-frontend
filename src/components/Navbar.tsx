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
import { getUser } from "@helper/auth/index"
import { deleteToken } from "@helper/auth/index"

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
        <a href="/login" className="uppercase px-4">
          Login
        </a>
        <a href="/signin" className="uppercase px-4">
          SignUp
        </a>
      </div>
    )
  }

  const prompt = (message: string): JSX.Element => {
    return (
      <div className="bg-orange-900 h-12 w-full flex align-center items-center justify-center my-auto">
        <h1>{message}</h1>
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
            onClick={() =>{ 
              router.push(`/user/${user.id}`)}}
          >
            View Account
          </button>
          <button
            className="py-1.5"
            onClick={() => {
              const msg = deleteToken()
              setPromptMessage(msg)
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
        onClick={() => {
          var body = document.querySelector("body")
          if (
            body?.classList.contains("bg-white") &&
            body?.classList.contains("text-neutral-900")
          ) {
            body?.classList.remove("bg-white")
            body?.classList.remove("text-neutral-900")
            body?.classList.add("bg-neutral-800")
            body?.classList.add("text-slate-50")
            setDark(true)
          } else if (
            body?.classList.contains("bg-neutral-800") &&
            body?.classList.contains("text-slate-50")
          ) {
            body?.classList.remove("bg-neutral-800")
            body?.classList.remove("text-slate-50")
            body?.classList.add("bg-white")
            body?.classList.add("text-neutral-900")
            setDark(false)
          }
        }}
        className={`h-10 w-10 ${
          dark ? "bg-black" : "bg-white"
        } rounded-full absolute top-8 right-8`}
        id="theme-change-btn"
      >
        {dark && <LightModeIcon />}

        {!dark && <DarkModeIcon sx={{ color: "#000000" }} />}
      </button>
    )
  }

  return (
    <nav className=" mx-auto w-full text-center text-slate-100 z-[100]">
      {/* Modal  */}
      {promptMessage && prompt(promptMessage)}

      <div className="flex text-center items-center bg-indigo-900 justify-around align-center h-40">
        {/* Heading  */}
        <h1 className="text-xl lg:text-3xl font-bold uppercase" id="heading">
          GoodBlogs
        </h1>

        {/* Routes  */}
        <div className="font-semibold uppercase">
          <Link href="/" className="px-8">
            Read Blogs
          </Link>
          <Link href="create" className="px-8">
            Create Blog
          </Link>

          <Link href="/about" className="px-8">
            {" "}
            About{" "}
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
