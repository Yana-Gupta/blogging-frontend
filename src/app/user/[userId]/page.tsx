"use client"

import { provideUserContext } from "@api/user/index"
import { FormControl, FormControlLabel, TextField } from "@mui/material"
import { notFound } from "next/navigation"
import { fetchBlogsForUser } from "@api/blog/index"
import { useRouter } from "next/navigation"

const user = async (props: any): Promise<JSX.Element> => {
  var user: object | undefined = {}
  var userBlogs: object[] | undefined = []
  const router = useRouter()

  await provideUserContext(props?.params?.userId).then((res) => {
    user = res
  })
  if (!user) return notFound()

  await fetchBlogsForUser(user?.email).then((res) => {
    userBlogs = res
    console.log(userBlogs)
  })

  return (
    <div className="my-2 flex flex-col justify-center items-center ">
      <div>
        <h1 className="text-4xl font-semibold py-4">Welcome Back {user?.name} !</h1>
      </div>
      {/* <div className="text-center">
        <FormControl>
          <FormControlLabel
            sx={{ mb: 3 }}
            labelPlacement={"top"}
            label={"NAME"}
            control={
              <TextField id="name" defaultValue={user?.name} variant="filled" />
            }
          ></FormControlLabel>
          <FormControlLabel
            sx={{ mb: 3 }}
            labelPlacement={"top"}
            disabled
            label={"Email"}
            control={
              <TextField
                id="name"
                defaultValue={user?.email}
                variant="filled"
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            sx={{ mb: 3 }}
            labelPlacement={"top"}
            label={"Password"}
            control={<TextField id="name" variant="filled" />}
          ></FormControlLabel>
          <button className="uppercase">Update Details</button>
        </FormControl>
      </div> */}
      <div>
        <h1 className="text-4xl font-semibold py-10 uppercase text-center">
          Your Blogs
        </h1>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-x-44 gap-y-10">
          {!userBlogs
            ? "No blogs found"
            : userBlogs.map((blog, index) => {
                return (
                  <div key={index}>
                    <h1 className="text-xl">{blog?.title}</h1>
                    <p>{blog?.body.substr(0, 40)} ...</p>
                    <p>Pusblished On - {blog?.date.substr(0, 10)}</p>
                    <button onClick={() => router.push(`/blog/${blog._id}`)}>
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
