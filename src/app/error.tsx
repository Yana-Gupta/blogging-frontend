"use client"

// UI for the error
import UIError from "@ui/error"

import { useRouter } from "next/navigation"

const Error = ({
  error,
  reset,
}: {
  error: any
  reset: () => void
}): React.JSX.Element => {
  const router = useRouter()

  return (
    <div className="min-h-[90vh]">
      <UIError
        error={error.message}
        reset={() => {
          router.push("/login")
        }}
      />
    </div>
  )
}

export default Error
