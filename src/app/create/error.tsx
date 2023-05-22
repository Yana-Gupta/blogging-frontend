"use client"

// UI for the error
import UIError from "@components/ui/error"

import { useRouter } from "next/navigation"

const Error = ({
  error,
}: {
  error: any
  reset: () => void
}): React.JSX.Element => {
  const router = useRouter()

  return (
    <UIError
      error={error.message}
      reset={() => {
        router.push("/login")
      }}
    />
  )
}

export default Error
