"use client"

import React from "react"
import { useState } from "react"

const Navbar = (): React.JSX.Element => {
  const [dark, setDark] = useState(false)
  
  return (
    <nav className="mx-auto w-full text-center h-20 ">
      I am navbar
      <button
        onClick={() => {
          var body = document.querySelector("body")
          if (body?.classList.contains("light")) {
            body?.classList.remove("light")
            body?.classList.add("dark")
            setDark(true)
          } else if (body?.classList.contains("dark")) {
            body?.classList.remove("dark")
            body?.classList.add("light")
            setDark(false)
          }
        }}
        className={`h-12 w-12 ${
          dark ? "bg-[#ffffff]" : "bg-black"
        } rounded-full flex items-center justify-center`}
      >
        {dark && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            id="IconChangeColor"
            height="30"
            width="30"
          >
            <rect width="256" height="256" fill="#fff"></rect>
            <circle cx="128" cy="128" r="60" opacity="0.2"></circle>
            <circle
              cx="128"
              cy="128"
              r="60"
              fill="#fff"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></circle>
            <line
              x1="128"
              y1="36"
              x2="128"
              y2="28"
              fill="#fff"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="62.9"
              y1="62.9"
              x2="57.3"
              y2="57.3"
              fill="#fff"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="36"
              y1="128"
              x2="28"
              y2="128"
              fill="#fff"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="62.9"
              y1="193.1"
              x2="57.3"
              y2="198.7"
              fill="#fff"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="128"
              y1="220"
              x2="128"
              y2="228"
              fill="#fff"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="193.1"
              y1="193.1"
              x2="198.7"
              y2="198.7"
              fill="#fff"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="220"
              y1="128"
              x2="228"
              y2="128"
              fill="#fff"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="193.1"
              y1="62.9"
              x2="198.7"
              y2="57.3"
              fill="#fff"
              stroke="#000000"
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
          >
            <path
              fill="none"
              stroke="#fff"
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
