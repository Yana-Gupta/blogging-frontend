"use client"

import React, { use, useContext, useState } from "react"
import { FormControl, FormLabel, TextField } from "@mui/material"
import axios from "axios"
import { Container } from "@mui/material"
import { UserContext } from "../layout"
import { useRouter } from "next/navigation"

interface IUser {
  email: string
  password: string
}

const Login = (): JSX.Element => {
  let userToken = useContext(UserContext)
  let user: IUser
  let setUser: any
  ;[user, setUser] = useState({ email: "", password: "" })

  const router = useRouter()

  const handleSubmit = async (event: any) => {
    console.log(event.target.email.value)

    try {
      setUser({
        email: event.target.email.value,
        password: event.target.password.value,
      })

      const { data } = await axios.post(
        "http://localhost:4000/api/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      console.log(data)
      if (data.accessToken) {
        userToken = data.accessToken
      }

      event.preventDefault()

      router.push("/")
    } catch (error) {
      console.log("Error while login is: ", error)
    }
  }

  

  return (
    <Container className="min-h-[90vh] mx-auto text-center w-full flex flex-col items-center align-center text-center">
      <h1 className="text-center uppercase text-xl tablet:text-3xl laptop:text-5xl desktop:text-5xl">
        Login to GOOD BLogs
      </h1>
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
          />
        </FormControl>
        <FormControl className="my-2">
          <TextField
            label="Password"
            helperText="Please enter your password here"
            type="password"
            className="input"
            name="password"
          />
        </FormControl>
        <button type="submit" className="">
          Submit
        </button>
      </form>
    </Container>
  )
}

export default Login
