"use client"

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"
import UILoading from "@ui/loading"

interface SignUpProps {
  name: String
  email: String
  password: String
  confirmPassword: String
}

const SignUp = (): JSX.Element => {
  const router = useRouter()
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleSignUp = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (props.password !== props.confirmPassword) {
        setError("Passwords do not match")
        setLoading(false)
        console.log(error)
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
      console.log(data, status)

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
      console.log("Error while creating account", err)
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
      <div className="px-10 py-10 flex flex-col w-full items-center flex flex-col border border-red-100 rounded-md">
        <h1 className="text-2xl ablet:text-4xl laptop:text-6xl font-bold my-8">
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
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setProps({ ...props, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="password ">Password</label>
            <input
              type="text"
              name="password"
              id="email"
              onChange={(e) => setProps({ ...props, password: e.target.value })}
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
            />
          </div>
          <button onClick={(e) => handleSignUp(e)}>Submit</button>
          {error && <div className="text-red-500 text-center">{error}</div>}
        </div>
      </div>
    )
  }

  return (
    <div className="items-center xl:mx-[400px] lg:mx-80 md:mx-40 sm:mx-20 mx-8">
      {loading ? <UILoading /> : formElement()}
    </div>
  )
}

export default SignUp
