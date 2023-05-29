import React from "react"
import Header from "@assets/images/Header.png"

import UILoading from "@ui/loading"

import Image from "next/image"

// functions
import { fetchBlogs } from "@api/blog/index"

// icons

const Home = async (): Promise<JSX.Element> => {
  var blog: [] = []

  await fetchBlogs().then((res) => {
    if (typeof res === "object") {
      blog = res
    }
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="h-[75vh] w-full" id="header">
        <div className="h-5/6 flex justify-between items-center">
          <h2>Hellow world</h2>
          <Image src={""} alt="Hellow" />
        </div>
      </div>

      <div className="p-20" id="read-blogs">
        {!blog ? (
          <UILoading />
        ) : (
          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 laptop:gap-x-16 desktop:gap-x-24">
            {blog.map((item: any, index: number) => {
              // if (index > 20) {
              return (
                <div
                  className="card w-full h-60 tablet:w-76 laptop:w-100 bg-slate-200/75"
                  key={index}
                >
                  <div className="h-42">
                    <h1 className="spacing-[1px] text-xl laptop:text-3xl underline">
                      {item.title}
                    </h1>
                    <p className="pt-2">{`${item.body.substr(0, 140)} ...`}</p>
                  </div>

                  <a href={`/blog/${item._id}`} className="fadeIn" id="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
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
              // }
            })}
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
