import axios from "axios"

export async function fetchBlogs(): Promise<[] | undefined> {
  try {
    const { data, status } = await axios.get("http://localhost:4000/api/post")
    if (status === 200) {
      return data
    }
    return undefined
  } catch (err) {
    console.error(err)
  }
}

export async function blog(id: string): Promise<[] | undefined> {
  try {
    const { data, status } = await axios.get(
      `http://localhost:4000/api/post/${id}`
    )
    if (status === 200) {
      return data
    }
    return []
  } catch (err) {
    console.error(err)
  }
}

export async function fetchBlogsForUser(
  email: string
): Promise<[] | undefined> {
  if (email) {
    try {
      var blog: []
      var userBlogs: any
      await fetchBlogs().then((res) => {
        if (res) {
          blog = res
          userBlogs = blog.filter((blog) => blog["userEmail"] === email)
        }
      })
      return userBlogs
    } catch (err) {
      console.error(err)
    }
  }
}
