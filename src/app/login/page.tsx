"use client"

import React, { useState } from "react"
import { FormControl, TextField } from "@mui/material"
import axios from "axios"
import { Container } from "@mui/material"
import { useRouter } from "next/navigation"
import UILoading from "@ui/loading"
import UIError from "@ui/error"

interface IUser {
  email: string
  password: string
}

const Login = (): JSX.Element => {
  const [user, setUser] = useState<IUser>({ email: "", password: "" })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const router = useRouter()

  const handleSubmit = async (event: any) => {
    setLoading(true)

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (data.accessToken) {
        window.localStorage.setItem("user", JSON.stringify(data))
      }
      setLoading(false)
      router.push("/")
      event.preventDefault()
    } catch (error: any) {
      setLoading(false)
      setError(error.response.data.message)
      console.log("Error while login is: ", error)
    }
  }

  const loadingMessage = (): JSX.Element => {
    return <UILoading />
  }

  const errorMessage = (): JSX.Element => {
    return (
      <UIError
        error={error}
        reset={() => {
          setLoading(false)
          setError("")
          router.push("/login")
        }}
      />
    )
  }

  const formComponent = (): JSX.Element => {
    return (
      <form
        className="flex flex-col text-center items-center"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormControl className="my-2">
          <TextField
            label="Email"
            helperText="Please enter your email here"
            className="input"
            name="email"
            required
            onChange={(e) => {
              setUser({ ...user, email: e.target.value })
            }}
          />
        </FormControl>
        <FormControl className="my-2">
          <TextField
            label="Password"
            helperText="Please enter your password here"
            type="password"
            className="input"
            name="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value })
            }}
          />
        </FormControl>
        <button type="submit" className="">
          Submit
        </button>
      </form>
    )
  }

  return (
    <Container className="min-h-[90vh] mx-auto text-center w-full flex flex-col items-center align-center text-center">
      <h1 className="text-center uppercase text-xl tablet:text-3xl laptop:text-5xl desktop:text-5xl">
        Login to GOOD BLogs
      </h1>

      {!loading && !error && formComponent()}

      {loading && loadingMessage()}
      {error && errorMessage()}
    </Container>
  )
}

export default Login
