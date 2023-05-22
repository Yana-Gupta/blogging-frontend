"use client"

import Link from "next/link"
import React from "react"
import { useState } from "react"
import CloseIcon from "@mui/icons-material/Close"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"

// Methods
import { getUser } from "@helper/auth/index"

const Navbar = (): JSX.Element => {
  // Theme state
  const [dark, setDark] = useState(false)

  // prompt message state
  const [promptMessage, setPromptMessage] = useState<string>("")

  const deleteToken = (): Promise<any> => {
    return new Promise((resolve) => {
      window.localStorage.removeItem("user")
      setPromptMessage("You are logged out! Kindly refresh the page.")
      resolve("done")
    })
  }

  // setting user state
  var user: null | any
  user = getUser()

  const signIN_UP = (): JSX.Element => {
    return (
      <div>
        <Link href="/login" className="uppercase px-4">
          Login
        </Link>
        <Link href="/signin" className="uppercase px-4">
          SignUp
        </Link>
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

  const Logout = (): JSX.Element => {
    return (
      <div>
        <button onClick={deleteToken}>Logout</button>
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
    <nav className="mx-auto w-full text-center text-slate-100 ">
      {/* Modal  */}
      {promptMessage && prompt(promptMessage)}

      <div className="flex text-center items-center bg-indigo-900 justify-around align-center h-28">
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

        {!user && signIN_UP()}
        {user && Logout()}
      </div>

      {/* Theme changing icon  */}

      {ThemeChangeIcon()}
    </nav>
  )
}

export default Navbar
