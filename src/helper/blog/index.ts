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
