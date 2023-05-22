import Link from "next/link"

const Error = ({
  error,
  reset,
}: {
  error: string
  reset: () => void
}): React.JSX.Element => {
  return (
    <div className="text-center items-center flex flex-col justify-center">
      <p className="text-xl text-cyan-400 font-medium p-10">
        There was a problem
      </p>
      <h1 className="my-3 text-7xl font-bold p-7 text-cyan-200">
        {error ? error : "Something went wrong"}
      </h1>
      <div className="flex items-center">
        <button
          onClick={reset}
          className="m-8 py-2 text-xl px-4 bg-cyan-100 text-cyan-700 font-semibold border-1 border-cyan-300 rounded-md shadow-md hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-75"
        >
          Login
        </button>
        <Link
          href="/"
          className="text-xl text-400 text-cyan-300 underline underline"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default Error
