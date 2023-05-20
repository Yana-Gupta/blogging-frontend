"use client"

import React, { useState } from "react"
import { FormControl, FormLabel, TextField } from "@mui/material"
import axios from "axios"
import { Container } from "@mui/material"

interface IUser {
  name: string
  email: string
  password: string
}

const signin = (): JSX.Element => {
  let user: IUser
  let setUser: any
  ;[user, setUser] = useState({ name: "", email: "", password: "" })

  const handleSubmit = async (event: any): Promise<any> => {
    console.log(event.target.name.value)

    try {
      if (event.target.password.value !== event.target.confirmPassword.value) {
        throw new Error("Passwords do not match")
      }

      setUser({
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
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
    } catch (error) {
      console.log("error is: ", error)
    }
  }

  return (
    <Container className="min-h-[90vh] mx-auto text-center w-full flex flex-col items-center align-center text-center">
      <h1 className="text-center uppercase text-xl tablet:text-3xl laptop:text-5xl desktop:text-5xl">
        Sign UP to GOOD BLogs
      </h1>
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
          />
        </FormControl>
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
        <FormControl className="my-2">
          <TextField
            label="Password"
            helperText="Confirm your password"
            type="password"
            id="confirm password"
            className="input"
            name="confirmPassword"
            required
          />
        </FormControl>
        <button type="submit" className="">
          Submit
        </button>
      </form>
    </Container>
  )
}

export default signin
