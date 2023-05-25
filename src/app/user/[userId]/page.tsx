"use client"

import { provideUserContext } from "@helper/user/index"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"

const user = async (props: any): Promise<JSX.Element> => {
  var user: object | undefined = {}

  await provideUserContext(props?.params?.userId).then((res) => {
    user = res
  })
  if (!user) notFound()

  return (
    <>
      <h1>{user?.name}</h1>
    </>
  )
}

export default user
