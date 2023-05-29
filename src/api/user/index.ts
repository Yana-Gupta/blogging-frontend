import { getUser } from "@api/auth/index"
import axios from "axios"

export const provideUserContext = async (id: string): Promise<[] | undefined> => {
  const user: any = await getUser()
  if (user?.id == id) {
    try {
      const { data, status } = await axios.get(
        `http://localhost:4000/api/user/${id}`
      )
      if (status === 200) {
        return data?.user
      }
      return undefined
    } catch (err) {
      console.error(err)
    }
  }
  return undefined
}
