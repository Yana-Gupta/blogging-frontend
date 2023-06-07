"use client"

import Link from "next/link"
import React from "react"

// Import icons
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import CallIcon from "@mui/icons-material/Call"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"

import "@styles/footer.css"

const Footer = (): JSX.Element => {
  return (
    <footer className="light-footer" id="footer">
      <div className="w-full grid grid-rows-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-10 lg:px-20 gap-y-6 xl:px-32 py-20 lg:gap-x-4 xl:gap-x-8">
        <div className="md:col-span-2">
          <h2 className="font-semibold text-4xl"> About Us </h2>
          <p className="mt-4">
            Discover the art of storytelling and join a vibrant community of
            passionate bloggers on our platform, where words weave tales and
            perspectives unfold.
          </p>
          <button className="md:text-xl text-2xl px-4 py-2 bg-neutral-950 text-slate-50 mt-6 hover:bg-black">
            <Link href="signup">Subscribe Now</Link>
          </button>
          <div className="grid grid-cols-8 w-full my-6">
            <Link href="#" className="hover:text-gray-700">
              <FacebookIcon fontSize="large" />
            </Link>
            <Link href="#" className="hover:text-gray-700">
              <InstagramIcon fontSize="large" />
            </Link>
            <Link href="#" className="hover:text-gray-700">
              <TwitterIcon fontSize="large" />
            </Link>
            <Link href="#" className="hover:text-gray-700">
              <LinkedInIcon fontSize="large" />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-3">
            <p>
              <CallIcon />
              &nbsp; +91 9999999999
            </p>
            <p>
              <EmailIcon />
              &nbsp; email@gmail.com
            </p>
            <p>
              <LocationOnIcon />
              &nbsp; Gwalior, Madhya Pradesh
            </p>
            <p>
              <CalendarMonthIcon />
              &nbsp; Mon - Fri 10:00 AM - 5:30 PM
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Our Servers</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-3">
            <Link href="/" className="text-lg hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="text-lg hover:text-gray-400">
              About
            </Link>
            <Link href="/#read-blogs" className="text-lg hover:text-gray-400">
              Read Blogs
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Ask Question</h2>
          <div className="grid grid-cols-1 mt-6 gap-y-4">
            <input
              className="px-2 py-2 rounded-sm bg-gray-700 focus:bg-gray-800 hover:bg-gray-800 text-white"
              placeholder="Your email here.. "
            />
            <input
              className="px-2 py-2 rounded-sm bg-gray-700 focus:bg-gray-800 hover:bg-gray-800 text-white"
              placeholder="Your name here.. "
            />
            <textarea
              className="px-2 py-2 rounded-sm bg-gray-700 focus:bg-gray-800 hover:bg-gray-800 text-white"
              placeholder="Your query here.."
              rows={5}
            />
            <button className="uppercase justify-self-start	border border-[#FFD700] hover:bg-[#FFD700] rounded-md rounded-lg px-4">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="py-4 copyright light-copyright" id="copyright">
        <p className="text-center text-md">
          &copy; 2021 All Rights Reserved.{" "}
          <Link href="/#">
            <span className="">Privacy Policy</span>
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
