import React from "react"

import UILoading from "@ui/loading"
import Link from "next/link"

// functions
import { fetchBlogs } from "@api/blog/index"


const Home = async (): Promise<JSX.Element> => {
  var blog: [] = []

  await fetchBlogs().then((res) => {
    if (typeof res === "object") {
      blog = res
    }
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="h-[80vh] w-full" id="header">
        <div className="h-5/6 flex flex-col justify-center px-12 md:px-16 lg:px-18 xl:px-32 items-start">
          <h2
            className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-sams "
            style={{ lineHeight: "1.22" }}
          >
            Read 1000+ blogs on various topics from our community 🌐
          </h2>
          <button className="text-3xl px-7 py-3 bg-emerald-500 font-semibold text-white my-8 rounded-full hover:bg-emerald-600">
            <Link href="/signin">Get Started</Link>
          </button>
        </div>
      </div>

      <div
        className="pb-8 px-8 tablet:pb-10 tablet:px-10 laptop:pb-20 laptop:px-14"
        id="read-blogs"
      >
        <h1 className="text-center p-6"> Read Blogs </h1>
        {!blog ? (
          <UILoading />
        ) : (
          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 laptop:gap-x-16 desktop:gap-x-24">
            {blog.map((item: any, index: number) => {
              return (
                <div
                  className="card h-60 tablet:w-76 laptop:w-100 blog-card light-card hover:shadow-lg"
                  key={index}
                >
                  <div className="h-42">
                    <h1 className="spacing-[1px] text-xl laptop:text-3xl underline">
                      {item.title}
                    </h1>
                    <p className="pt-2">{`${item.body.substr(0, 140)} ...`}</p>
                  </div>

                  <a
                    href={`/blog/${item._id}`}
                    className="fadeIn text-2xl py-2 px-4"
                    id="btn"
                  >
                    <svg viewBox="0 0 25 25">
                      <path
                        fill="#232326"
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </a>
                  <div>
                    <span></span>
                  </div>
                </div>
              )
            
            })}
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
