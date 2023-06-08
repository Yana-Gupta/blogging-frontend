"use client"

import Link from "next/link"
import React from "react"
import { useState } from "react"

// Icons
import CloseIcon from "@mui/icons-material/Close"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

// Methods
import { getUser } from "@api/auth/index"
import { deleteToken } from "@api/auth/index"

// next router
import { useRouter } from "next/navigation"

// Navbar component
const Navbar = (): JSX.Element => {
  const user: any = getUser()

  // Theme state
  const [dark, setDark] = useState(false)

  // prompt message state
  const [promptMessage, setPromptMessage] = useState<string>("")

  const router = useRouter()

  // for changing theme

  const changeTheme = (): void => {
    setDark(!dark)
    document.body.classList.toggle("dark")
    document.body.classList.toggle("light")
    var blogCard = document.getElementsByClassName("blog-card")
    for (let i = 0; i < blogCard.length; i++) {
      blogCard[i].classList.toggle("dark-card")
      blogCard[i].classList.toggle("light-card")
    }

    var footer = document.getElementById("footer")
    footer?.classList.toggle("dark-footer")
    footer?.classList.toggle("light-footer")

    var coryright = document.getElementById("copyright")
    coryright?.classList.toggle("dark-copyright")
    coryright?.classList.toggle("light-copyright")

    var sidenav = document.getElementById("sidenav")
    sidenav?.classList.toggle("bg-slate-500/[.97]")
    sidenav?.classList.toggle("bg-stone-800/[.97]")
    sidenav?.classList.toggle("text-slate-50")
  }

  const beforeLogin_SignUp = (): JSX.Element => {
    return (
      <div className="justify-self-end">
        <div className="relative inline-block mr-16 xl:hidden">
          <div className="bg-slate-700 focus:bg-slate-800 text-white rounded-full flex flex-row items-center justify-center rounded-full border">
            <button className="px-4 py-2">
              <Link href="/signin">Create Account</Link>
            </button>

            <button
              className="items-center p-1 h-full bg-violet-600 rounded-full"
              id="auth-dropdown"
              onClick={() => {
                document
                  ?.getElementById("dropdown-menu")
                  ?.classList.toggle("hidden")
                document
                  ?.getElementById("dropdown-menu")
                  ?.classList.toggle("flex")
              }}
            >
              <ArrowDropDownIcon fontSize="large" />
            </button>
          </div>

          <div
            id="dropdown-menu"
            className="hidden flex-col absolute min-w-[160px] rounded-xl shadow-lg top-14 z-10 text-slate-800"
          >
            <button className="fadeIn text-md rounded-t-md py-2 uppercase">
              <Link href="/signin">Sign In</Link>
            </button>
            <button className="fadeIn text-md rounded-b-md py-2 uppercase">
              <Link href="/signup">Sign Up</Link>
            </button>
          </div>
        </div>

        <div className="hidden xl:block mr-20" id="auth-option">
          <Link
            href="/signin"
            className="uppercase px-5 py-5 bg-gray-300 hover:bg-gray-400 text-black hover:font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="uppercase px-5 py-5 bg-[#093411] hover:bg-[#090B0B] text-white hover:font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    )
  }

  // For logout promt message
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
      <div className="relative top-20 mr-20 h-60 w-36">
        <div id="user-icon">
          <button
            className="p-0 rounded-full ring-white"
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
            <AccountCircleIcon
              color="primary"
              sx={{ height: "52px", width: "52px" }}
            />
          </button>
        </div>
        <div
          className="hidden flex-col rounded bg-gray-200 text-neutral-800 py-2"
          id="options"
        >
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
          dark ? "bg-stone-500" : "bg-white"
        } rounded-full absolute top-12 right-8`}
        id="theme-change-btn"
        onClick={changeTheme}
      >
        {dark && <LightModeIcon sx={{ color: "#ffffff" }} />}

        {!dark && <DarkModeIcon sx={{ color: "#000000" }} />}
      </button>
    )
  }

  return (
    <nav id="nav" className="md:pl-10 lg:pl-12">
      {/* Modal  */}
      {promptMessage && prompt(promptMessage)}

      <div
        style={{ height: "140px" }}
        className="flex text-center items-center justify-between align-center h-full px-4"
        id="nav-tools"
      >
        {/* Heading  */}
        <h1
          className="hidden xl:block lg:text-3xl font-bold uppercase"
          id="heading"
        >
          GoodBlogs
        </h1>

        <button
          className="block xl:hidden"
          onClick={() => {
            document.getElementById("sidenav")?.classList.toggle("w-0")
            document.getElementById("sidenav")?.classList.toggle("w-60")
          }}
        >
          <MenuRoundedIcon fontSize="large" />
        </button>

        <div
          id="sidenav"
          className="fixed w-0 overflow-x-hidden transition-all duration-1000 left-0 top-0 pt-20 bg-slate-300/[.97] h-full z-[100] text-neutral-800 flex flex-col items-center"
        >
          <button
            className="absolute top-10 right-10"
            onClick={() => {
              document.getElementById("sidenav")?.classList.toggle("w-0")
              document.getElementById("sidenav")?.classList.toggle("w-60")
            }}
          >
            <CloseIcon fontSize="large" />
          </button>
          <div className="mt-24 lg:mt-40 grid grid-cols-1 gap-y-10 text-xl text-center">
            <Link className="hover:font-semibold" href="/">
              Home
            </Link>
            <Link className="hover:font-semibold" href="/#read-blogs">
              Read Blogs
            </Link>
            <Link className="hover:font-semibold" href="/create">
              Create Blog
            </Link>
            <Link className="hover:font-semibold" href="/about">
              About
            </Link>
          </div>
        </div>

        {/* Routes  */}
        <div className="hidden xl:grid uppercase grid-cols-4 gap-x-16">
          <Link
            href="/"
            className="font-normal hover:underline underline-offset-4 focus:underline"
          >
            Home
          </Link>
          <Link
            href="/#read-blogs"
            className="font-normal hover:underline underline-offset-4 focus:underline"
          >
            Read Blogs
          </Link>
          <Link
            href="create"
            className="font-normal hover:underline underline-offset-4 focus:underline"
          >
            Create Blog
          </Link>

          <Link
            href="/about"
            className="font-normal hover:underline underline-offset-4 focus:underline"
          >
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
