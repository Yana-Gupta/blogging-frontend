import { blog } from "@api/blog/index"
import { notFound } from "next/navigation"

import "@styles/blog.css"

const Blog = async (props: any): Promise<JSX.Element> => {
  var reqBlog: object | any = {}
  await blog(props.params.blogId).then((res) => (reqBlog = res))

  if (!reqBlog) return notFound()

  return (
    <div className="min-h-[90vh]">
      <div className="align-left mt-4 mx-6 sm:mx-12 md:mx-20 lg:mx-40">
        <h1 className="text-3xl lg:text-5xl text-center py-3 bg-slate-300/25 mt-2 rounded-sm uppercase">
          {reqBlog?.title}
        </h1>
        <p className="bg-slate-300/50 py-4 px-4 md:px-4 rounded-md text-left">
          {reqBlog?.body}
          <br />
          <br />
          <span className="text-right w-full ">
            Written By:&nbsp;
            <b>{reqBlog?.userName}</b>
            &nbsp;on&nbsp;
            <b>{reqBlog?.date.substring(0, 10)}</b>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Blog
