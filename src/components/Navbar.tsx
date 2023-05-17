"use client"

import React from "react"
import { useState } from "react"

const Navbar = ({}): React.JSX.Element => {
  const [dark, setDark] = useState(false)

  return (
    <nav className="mx-auto w-full text-center h-20 ">
      We were good we were gold kinda dream 
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
          className={`absolute right-0 top-0 h-12 w-12 ${dark ? 'bg-[#ffffff]': 'bg-black'} rounded-full flex items-center justify-center`}
      >
        {!dark && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            id="IconChangeColor"
            height="30"
            width="30"
          >
            <rect width="256" height="256" fill="#000000"></rect>
            <circle cx="128" cy="128" r="60" opacity="0.2"></circle>
            <circle
              cx="128"
              cy="128"
              r="60"
              fill="#000000"
              stroke="#fff"
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
              stroke="#fff"
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
              stroke="#fff"
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
              stroke="#fff"
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
              stroke="#fff"
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
              stroke="#fff"
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
              stroke="#fff"
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
              stroke="#fff"
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
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
        )}

        {dark && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="IconChangeColor"
            height="30"
            width="30"
          >
            {" "}
            <g>
              {" "}
              <path
                fill="#ffffff"
                d="M0 0h24v24H0z"
                id="mainIconPathAttribute"
                strokeWidth="0"
                stroke="#000000"
              ></path>{" "}
              <path
                fill-rule="nonzero"
                d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
                id="mainIconPathAttribute"
                stroke="#000000"
                fill="#ffffff"
              ></path>{" "}
            </g>{" "}
          </svg>
        )}
      </button>
    </nav>
  )
}

export default Navbar
