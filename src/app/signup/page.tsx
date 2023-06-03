"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import UILoading from "@ui/loading"

// user
import { getUser } from "@/api/auth"

interface SignUpProps {
  name: String
  email: String
  password: String
  confirmPassword: String
}

const SignUp = (): JSX.Element => {
  const router = useRouter()

  var user: any = null

  useEffect(() => {
    user = getUser()
    if (user) {
      router.push("/")
    }
  })
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleSignUp = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (
        !(props.email && props.name && props.password && props.confirmPassword)
      ) {
        setError("Please fill all the fields!")
        setLoading(false)
        return
      }
      if (props.password !== props.confirmPassword) {
        setError("Passwords do not match")
        setLoading(false)
        console.error(error)
        return
      }

      const { data, status } = await axios.post(
        "http://localhost:4000/api/user",
        props,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (status === 201) {
        if (typeof window === undefined) return null
        localStorage.setItem("user", JSON.stringify(data))
        setLoading(false)
        e.preventDefault()
        router.push("/")
      }
    } catch (err: any) {
      if (err?.status) {
        setError("Invalid Credentials")
      } else {
        setError("Internal Server Error")
      }
      setLoading(false)
      console.error("Error while creating account", err)
    }

    e.preventDefault()
  }
  const [props, setProps] = useState<SignUpProps>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const formElement = (): JSX.Element => {
    return (
      <div
        className={`px-8 py-10 w-full items-center flex flex-col rounded-lg drop-shadow-2xl focus:drop-shadow-3xl text-black hover:drop-shadow-3xl dark-signup`}
        id="signup-card"
      >
        <h1 className="text-2xl ablet:text-4xl laptop:text-5xl font-bold my-8 text-center">
          Create a new account
        </h1>

        <div className="flex flex-col">
          <div className="flex flex-col py-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setProps({ ...props, name: e.target.value })}
              className="rounded-md px-2 py-2 w-full bg-slate-400/50"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setProps({ ...props, email: e.target.value })}
              className="rounded-md px-2 py-2 w-full bg-slate-400/50"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="password ">Password</label>
            <input
              type="text"
              name="password"
              id="email"
              onChange={(e) => setProps({ ...props, password: e.target.value })}
              className="rounded-md px-2 py-2 w-full bg-slate-400/50"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) =>
                setProps({ ...props, confirmPassword: e.target.value })
              }
              className="rounded-md px-2 py-2 w-full bg-slate-400/50"
              required
            />
          </div>
          <button
            onClick={(e) => handleSignUp(e)}
            className="rounded-md my-6 px-2 py-2 w-full bg-white text-black font-bold hover:bg-slate-200"
          >
            Submit
          </button>
          {error && <div className="text-red-500 text-center">{error}</div>}
        </div>
      </div>
    )
  }

  return (
    <div className="items-center xl:mx-[400px] lg:mx-80 md:mx-40 sm:mx-20 mx-7 flex flex-row ">
      {loading ? <UILoading /> : formElement()}
    </div>
  )
}

export default SignUp
