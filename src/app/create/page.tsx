"use client"

//css
import { Container, FormControl, TextField } from "@mui/material"

import { CSSProperties, ChangeEvent, useState, useEffect } from "react"

// Font format icons
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter"
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify"
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft"
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight"

// Functions
import { getUser } from "@api/auth/index"

// Error
import axios from "axios"
import dynamic from "next/dynamic"

// Interface
interface IPost {
  title: string
  body: string
}

const create = (): JSX.Element => {
  // tools options for the text area
  const [fontSize, setFontSize] = useState<number>(16)
  const [isBold, setIsBold] = useState<boolean>(false)
  const [isItalic, setIsItalic] = useState<boolean>(false)
  const [underlined, setIsunderlined] = useState<boolean>(false)
  const [textAlignOption, settextAlignOption] =
    useState<CSSProperties["textAlign"]>("left")

  // content of the post
  const [content, setContent] = useState<IPost>({
    title: "",
    body: "",
  })

  // submit the form
  const formSubmit = async (event: any, user: any): Promise<any> => {
    event.preventDefault()
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/post",
        {
          title: content.title,
          body: content.body,
          userName: user.name,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      console.log(data)
      console.log("Post created successfully")
    } catch (err) {
      console.log(err)
    }
  }

  // get the user
  var user: any = null
  useEffect(() => {
    user = getUser()
  })

  if (!user) {
    return (
      <div className="min-h-[90vh] w-full mx-auto flex flex-col align-center pt-20">
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-center">
          You need to login first to read create a blog
        </h1>
        <div className="w-full flex flex-row items-center w-full justify-center pt-10">
          <button className="px-6 py-2 bg-cyan-100 text-neutral-600 rounded-md hover:bg-emerald-200 focus:bg-emerald-200">
            <a href="/signin">Login</a>
          </button>
        </div>
      </div>
    )
  }

  return (
    <Container sx={{ minHeight: "100vh" }}>
      <h1 className="font-medium text-2xl text-center mt-4">
        CREATE BLOG POST
      </h1>
      <div className="flex flex-col justify-center py-12 grid grid-cols-1 gap-4">
        {/* Title of the post  */}

        <FormControl>
          <TextField
            className="border-2 border-gray-400"
            label="Title"
            maxRows={2}
            multiline
            name="title"
            onChange={(e) => {
              setContent({ ...content, title: e.target.value })
            }}
          />
        </FormControl>

        {/* Text area for the post */}

        <textarea
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
            textDecoration: underlined ? "underline" : "none",
            textAlign: textAlignOption,
            height: "400px",
            padding: "10px",
            borderRadius: "5px",
          }}
          className="border-2 border-gray-400"
          id="textarea"
          placeholder="Your text here.."
          name="body"
          onChange={(event) => {
            setContent({ ...content, body: event.target.value })
          }}
        ></textarea>

        {/* Tools for the text area  */}

        <Container
          style={{
            display: "flex",
            backgroundColor: "#B8B8B8",
            padding: "2px 3px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container>
            <input
              defaultValue={"16"}
              type="number"
              style={{
                height: "40px",
                width: "40px",
                padding: "0px",
              }}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setFontSize(event.target.valueAsNumber)
              }}
              className="border-2 border-gray-400"
            ></input>
          </Container>

          <Container>
            <button
              onClick={(event) => {
                setIsBold(!isBold)
                event.preventDefault()
              }}
            >
              <FormatBoldIcon />
            </button>
            <button
              onClick={(event) => {
                setIsItalic(!isItalic)
                event.preventDefault()
              }}
            >
              <FormatItalicIcon />
            </button>
            <button
              onClick={(event) => {
                setIsunderlined(!underlined)
                event.preventDefault()
              }}
            >
              <FormatUnderlinedIcon />
            </button>
          </Container>

          <Container>
            <button
              onClick={(event) => {
                settextAlignOption("left")
                event.preventDefault()
              }}
            >
              <FormatAlignLeftIcon />
            </button>
            <button
              onClick={(event) => {
                settextAlignOption("center")
                event.preventDefault()
              }}
            >
              <FormatAlignCenterIcon />
            </button>

            <button
              onClick={(event) => {
                settextAlignOption("right")
                event.preventDefault()
              }}
            >
              <FormatAlignRightIcon />
            </button>
            <button
              onClick={(event) => {
                settextAlignOption("justify")
                event.preventDefault()
              }}
            >
              <FormatAlignJustifyIcon />
            </button>
          </Container>
        </Container>

        <div>
          <button className="py-2 px-4" onClick={(e) => formSubmit(e, user)}>
            Post Blog
          </button>
        </div>
      </div>
    </Container>
  )
}

export default dynamic(() => Promise.resolve(create), { ssr: false })
