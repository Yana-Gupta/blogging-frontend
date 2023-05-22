"use client"

//css
import { Container, FormControl, TextField } from "@mui/material"
import { CSSProperties, ChangeEvent, FormEvent, useState } from "react"

// Font format icons
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter"
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify"
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft"
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight"

// Functions
import { getUser } from "@helper/auth/index"

// Error
import { AuthRequiredError } from "@lib/exceptions"
import axios from "axios"

// Interface
interface IPost {
  title: string
  body: string
}

const create = (): JSX.Element => {
  const user = getUser()

  if (!user) {
    throw new AuthRequiredError("You must be logged in to create a post.")
  }

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
          title: event.target.title.value,
          body: event.target.body.value,
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

  return (
    <Container sx={{ minHeight: "90vh" }}>
      <h1 className="font-medium text-2xl text-center mt-4">
        CREATE BLOG POST
      </h1>
      <form
        className="flex flex-col justify-center py-12 grid grid-cols-1 gap-4"
        onSubmit={(event: any) => formSubmit(event, user)}
      >
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
          <button type="submit" className="py-2 px-4">
            Post Blog
          </button>
        </div>
      </form>
    </Container>
  )
}

export default create
