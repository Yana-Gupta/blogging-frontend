import React from "react"

// functions
import { fetchBlogs } from "@helper/blog/index"

const Wait = () => new Promise((resolve) => setTimeout(resolve, 2000))

const Home = async (): Promise<JSX.Element> => {
  await Wait()

  var blog: [] = []

  await fetchBlogs().then((res) => {
    if (typeof res === "object") {
      blog = res
    }
    console.log(blog)
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 opacity-60">
      {!blog ? (
        <h1>NO BLOGS FOUND</h1>
      ) : (
        <div className="grid grid-cols-1 gap-6 laptop:grid-cols-2 lg:gap-x-32">
          {blog.map((item: any, index: number) => {
            if (index < 20) {
              return (
                <div
                  className="bg-[#EAE2D6] p-4 focus:bg-[#F8F5F2] hover:bg-[#F8F5F2]"
                  key={index}
                >
                  <h1>{item.title}</h1>
                  <p>
                    Written by: <span>{item.userName}</span>
                  </p>
                  <p>
                    Published on: <span>{item.date.substr(0, 10)}</span>
                  </p>
                  <a href={`/blog/${item._id}`}>Read </a>
                </div>
              )
            }
          })}
        </div>
      )}
    </main>
  )
}

export default Home
