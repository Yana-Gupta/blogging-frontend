"use client"

import axios from "axios"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Graphic from "@assets/images/LoginGraphic.png"

import UILoading from "@ui/loading"

// user function

import { getUser } from "@api/auth/index"

interface LoginProps {
  email: string
  password: string
}

import Image from "next/image"
import Link from "next/link"

const Login = () => {
  const router = useRouter()

  var user: any = null
  useEffect(() => {
    user = getUser()
    if (user) {
      router.push("/")
    }
  })

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (event: any): Promise<any> => {
    event.preventDefault()
    setLoading(true)

    if (props.email === "" || props.password === "") {
      setError("Please fill all the fields!")
      setLoading(false)
      return
    }
    try {
      const { data, status } = await axios.post(
        "http://localhost:4000/api/login",
        props,
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
        router.push("/")
      }
      setLoading(false)
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

  const [props, setProps] = useState<LoginProps>({ email: "", password: "" })

  const form = (): JSX.Element => {
    return (
      <div
        className="flex flex-col px-10 py-8 my-3 rounded-lg shadow-md hover:shadow-2xl light"
        id="login"
      >
        <h2 className="text-center mb-6 lg:mb-8 xl:mb-10 font-mono uppercase text-5xl">
          Login
        </h2>
        <div className="flex flex-row py-0 ">
          <div className="px-10 flex flex-col items-center justify-center bg-blue-100 py-8 lg:py-12 xl:py-16 rounded-lg shadow-xl hover:shadow-2xl">
            <h1 className="text-3xl font-bold py-4">Welcome back</h1>
            <div className="flex flex-col my-2">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setProps({ ...props, email: e.target.value })}
                id="email"
                className="border-2 border-gray-400 px-2 py-1 rounded-md my-2"
                required
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) =>
                  setProps({ ...props, password: e.target.value })
                }
                id="password"
                type="password"
                className="border-2 border-gray-400 px-2 py-1 rounded-md my-2"
                required
              />
            </div>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
            {error && <p className="text-rose-700">{error}</p>}
          </div>
          <div className="hidden md:flex px-4 py-8 text-center flex-col items-center justify-between">
            <Image
              src={Graphic}
              alt=""
              className="lg:h-60 lg:w-60 md:h-72 md:w-52 xl:h-96 xl:w-96"
            />
            <Link
              href="/signup"
              className="text-blue-800 hover:underline focus:underline"
            >
              New? Let's create an account.
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col align-center items-center min-h-[90vh]">
      {loading ? (
        <div className="items-center flex-row items-center justify-center w-full">
          <UILoading />
        </div>
      ) : (
        form()
      )}
    </div>
  )
}

export default dynamic(() => Promise.resolve(Login), { ssr: false })
