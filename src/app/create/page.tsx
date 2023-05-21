"use client"
import { Container, FormControl, TextField } from "@mui/material"
import { CSSProperties, ChangeEvent, useState } from "react"

// Font format icons
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter"
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify"
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft"
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight"

import { getUser } from "@helper/auth/index"

const create = (): JSX.Element => {

  const user = getUser()
  if (!user) {
    throw new Error("User not found")
  }
  // tools options for the text area
  const [fontSize, setFontSize] = useState<number>(16)
  const [isBold, setIsBold] = useState<boolean>(false)
  const [isItalic, setIsItalic] = useState<boolean>(false)
  const [underlined, setIsunderlined] = useState<boolean>(false)
  const [textAlignOption, settextAlignOption] =
    useState<CSSProperties["textAlign"]>("left")

  return (
    <Container>
      <h1 className="font-medium text-2xl text-center mt-4">
        CREATE BLOG POST
      </h1>
      <form className="flex flex-col justify-center py-12 grid grid-cols-1 gap-4">
        {/* Title of the post  */}

        <FormControl>
          <TextField
            className="border-2 border-gray-400"
            label="Title"
            maxRows={2}
            multiline
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
          <button className="py-2 px-4">Post Blog</button>
        </div>
      </form>
    </Container>
  )
}

export default create
