"use client"

import axios from "axios"
import dynamic from "next/dynamic"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface LoginProps {
  email: string
  password: string
}

import "../../styles/form.css"

const Login = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (event: any): Promise<any> => {
    event.preventDefault()
    setLoading(true)
    try {
      const { data, status } = await axios.post(
        "http://localhost:4000/api/login",
        login,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      if (status === 200) {
        if (typeof window === undefined) return null
        localStorage.setItem("user", JSON.stringify(data))
        event.preventDefault()
      }
      setLoading(false)
      router.push("/")
    } catch (err: any) {
      if (err?.status === 401 || 404) {
        console.log(err.status)
        setError("Invalid Credentials")
      }
      if (err?.message === "Internal Server Error") {
        setError("Internal Server Error")
      }

      setError("Something went wrong")
      setLoading(false)
    }
  }

  const [login, setLogin] = useState<LoginProps>({ email: "", password: "" })

  const form = (): JSX.Element => {
    return (
      <div className="form">
        <div className="title text-center">Welcome</div>
        <div className="subtitle text-center">Let's login to your account!</div>

        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e: any) => setLogin({ ...login, email: e.target.value })}
            required
          />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="password"
            placeholder=" "
            onChange={(e: any) => {
              setLogin({ ...login, password: e.target.value })
              console.log(login)
            }}
            required
          />
          <div className="cut cut-short"></div>
          <label htmlFor="password" className="placeholder">
            Password
          </label>
        </div>
        <button className="submit" onClick={(e: any) => handleSubmit(e)}>
          submit
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col align-center justify-center items-center">
      {loading ? <h1>Loading...</h1> : form()}
      {error && <h3 className="text-red-500">{error}</h3>}
    </div>
  )
}

export default dynamic(() => Promise.resolve(Login), { ssr: false })
