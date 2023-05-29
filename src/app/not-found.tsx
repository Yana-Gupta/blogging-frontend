import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col text-center min-h-[80vh] justify-center">
      <h1 className="font-semibold">Not found – 404!</h1>
      <div className="my-10">
        <Link className="text-blue-300 text-xl hover:underline" href="/">
          Go back to Home
        </Link>
      </div>
    </div>
  )
}
