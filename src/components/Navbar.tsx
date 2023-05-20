"use client"

import Link from "next/link"
import React from "react"
import { useState } from "react"

import { UserContext } from "@/app/layout"

const Navbar = (): JSX.Element => {
  let userToken = React.useContext(UserContext)
  const [dark, setDark] = useState(false)

  return (
    <nav className="mx-auto w-full text-center h-28 bg-indigo-900 text-slate-100 ">
      <div className="flex text-center items-center justify-around align-center h-28">
        {/* Heading  */}
        <h1 className="text-xl lg:text-3xl font-bold uppercase" id="heading">
          GoodBlogs
        </h1>

        {/* Routes  */}
        <div className="font-semibold uppercase">
          <Link href="/" className="px-8">
            Read Blogs
          </Link>
          <Link href="/about" className="px-8">
            {" "}
            About{" "}
          </Link>
        </div>

        {/* Login / Logout Route  */}
        <div>
          <Link href="/login" className="uppercase px-4">
            Login
          </Link>
          <Link href="/signin" className="uppercase px-4">
            SignUp
          </Link>
        </div>
      </div>

      {/* Theme changing icon  */}

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
        className={`h-12 w-12 ${
          dark ? "bg-black" : "bg-white"
        } rounded-full absolute top-8 right-8`}
        id="theme-change-btn"
      >
        {dark && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            id="IconChangeColor"
            height="30"
            width="30"
            style={{ margin: "auto" }}
          >
            <rect width="256" height="256" fill="#000000"></rect>
            <circle cx="128" cy="128" r="60" opacity="0.2"></circle>
            <circle
              cx="128"
              cy="128"
              r="60"
              fill="#000000"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></circle>
            <line
              x1="128"
              y1="36"
              x2="128"
              y2="28"
              fill="#000000"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="62.9"
              y1="62.9"
              x2="57.3"
              y2="57.3"
              fill="#000000"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="36"
              y1="128"
              x2="28"
              y2="128"
              fill="#000000"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="62.9"
              y1="193.1"
              x2="57.3"
              y2="198.7"
              fill="#000000"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="128"
              y1="220"
              x2="128"
              y2="228"
              fill="#000000"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="193.1"
              y1="193.1"
              x2="198.7"
              y2="198.7"
              fill="#000000"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="220"
              y1="128"
              x2="228"
              y2="128"
              fill="#000000"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="193.1"
              y1="62.9"
              x2="198.7"
              y2="57.3"
              fill="#000000"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
        )}

        {!dark && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            id="moon"
            height="30"
            width="30"
            style={{ margin: "auto" }}
          >
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.63 20a9 9 0 0 1-9.12-8.78A8.61 8.61 0 0 1 14.17 5 10.17 10.17 0 0 0 5 15a10.23 10.23 0 0 0 10.42 10A10.43 10.43 0 0 0 25 18.9a9.3 9.3 0 0 1-4.37 1.1Z"
            ></path>
          </svg>
        )}
      </button>
    </nav>
  )
}

export default Navbar
