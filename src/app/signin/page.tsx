"use client"

import React, { useState } from "react"
import { FormControl, TextField } from "@mui/material"
import axios from "axios"
import { Container } from "@mui/material"
import { useRouter } from "next/navigation"

import UILoading from "@components/ui/loading"
import UIError from "@components/ui/error"

interface IUser {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const signin = (): JSX.Element => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const router = useRouter()
  const handleSubmit = async (event: any): Promise<any> => {
    console.log(event.target.name.value)

    try {
      if (user.password !== user.confirmPassword) {
        setLoading(false)
        setError("Password and confirm password are not the same")
        return
      }

      const { data } = await axios.post(
        "http://localhost:4000/api/user",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log(data)
      event.preventDefault()
      router.push("/")
    } catch (error) {
      console.log("error is: ", error)
      return
    }
  }

  const singUpForm = (): JSX.Element => {
    return (
      <form
        className="flex flex-col text-center items-center"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormControl className="my-2">
          <TextField
            helperText="Please enter your name"
            label="Name"
            className="input"
            name="name"
            required
            onChange={(e) => {
              setUser({ ...user, name: e.target.value })
            }}
          />
        </FormControl>
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
        <FormControl className="my-2">
          <TextField
            label="Password"
            helperText="Confirm your password"
            type="password"
            id="confirm password"
            className="input"
            name="confirmPassword"
            required
            onChange={(e) => {
              setUser({ ...user, confirmPassword: e.target.value })
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
        Sign UP to GOOD BLogs
      </h1>


      {singUpForm()}



    </Container>
  )
}

export default signin
