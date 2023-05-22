import { blog } from "@helper/blog/index"

const Blog = async (props: any): Promise<JSX.Element> => {
  //   console.log(props)

  var reqBlog: object | undefined = {}
  await blog(props.params.blogId).then((res) => (reqBlog = res))

  return (
    <div>
      {!reqBlog ? (
        <p>No blog</p>
      ) : (
        <div className="algin-left">
          <h1 className="text-5xl">{reqBlog.title}</h1>
          <p>{reqBlog.body}</p>
        </div>
      )}
    </div>
  )
}

export default Blog
