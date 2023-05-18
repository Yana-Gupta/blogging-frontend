import React from "react"
import axios from "axios"
import blog from "./blog/[blogId]/page"
import Link from "next/link"

const wait = () => new Promise((resolve) => setTimeout(resolve, 2000))

const Home = async (): Promise<JSX.Element> => {
  var blog: any = null
  await wait()
  try {
    const { data } = await axios.get("http://localhost:4000/api/post")
    blog = data
  } catch (err) {
    console.log(err)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!blog ? (
        "NO DATA"
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-32">
          {blog.map((item: any, index: number) => {
            if ( index < 20 ) {
              return (
                <Link href={`/blog/${item._id}`} className="bg-[#EAE2D6] p-4 focus:bg-[#F8F5F2] hover:bg-[#F8F5F2]">
                  <h1>{item.title}</h1>
                  <p>{item.body.substr(0, 40)} ...</p>
                  <p>Written by: <span>{item.userName}</span></p>
                  <p>Published on: <span>{item.date.substr(0, 10)}</span></p>
                </Link>
              )
            }
          })}
        </div>
      )}
    </main>
  )
}

export default Home
