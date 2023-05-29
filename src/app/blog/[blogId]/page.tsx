import { blog } from "@api/blog/index"

const Blog = async (props: any): Promise<JSX.Element> => {
  var reqBlog: object | any = {}
  await blog(props.params.blogId).then((res) => (reqBlog = res))

  return (
    <div className="min-h-[90vh]">
      <div className="align-left mt-12 mx-6 sm:mx-12 md:mx-20 lg:mx-40">
        <h1 className="text-5xl text-center py-12">{reqBlog?.title}</h1>
        <p>{reqBlog?.body}</p>
      </div>
    </div>
  )
}

export default Blog
