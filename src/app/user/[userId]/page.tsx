"use client"

import { provideUserContext } from "@api/user/index"
import { notFound } from "next/navigation"
import { fetchBlogsForUser } from "@api/blog/index"
import { useRouter } from "next/navigation"

const user = async (props: any): Promise<JSX.Element> => {
  var user: any = {}
  var userBlogs: Array<any> | undefined= []
  const router = useRouter()

  await provideUserContext(props?.params?.userId).then((res) => {
    user = res
  })

  if (!user) return notFound()

  await fetchBlogsForUser(user!.email).then((res) => {
    userBlogs = res
    console.log(userBlogs)
  })

  return (
    <div className="my-2 flex flex-col py-2 ">
      <div>
        <h1 className="text-3xl tablet:text-4xl font-semibold py-4 text-center">
          Welcome Back {user!.name} !
        </h1>
      </div>
      <div className="px-6 tablet:px-14 laptop:px-18">
        <h1 className="text-4xl font-semibold py-10 uppercase text-center">
          Your Blogs
        </h1>
        <div className="grid grid-cols-1 laptop:grid-cols-1 gap-x-24 gap-y-10">
          {!userBlogs
            ? "No blogs found"
            : userBlogs.map((blog, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-400/25 px-2 py-2 rounded-md"
                  >
                    <div className="px-2 pt-2">
                      <h1 className="text-xl">{blog!.title}</h1>
                      <p>{blog!.body.substr(0, 40)} ...</p>
                      <p>Pusblished On - {blog!.date.substr(0, 10)}</p>
                    </div>
                    <button
                      className="mt-4 hover:bg-gray-400/25 px-2 py-2 rounded-md"
                      onClick={() => router.push(`/blog/${blog!._id}`)}
                    >
                      View More
                    </button>
                  </div>
                )
              })}
        </div>
      </div>
    </div>
  )
}

export default user
