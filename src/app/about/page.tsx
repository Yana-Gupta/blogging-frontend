import Link from "next/link"

const About = (): JSX.Element => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-extrabold my-10">About</h1>
      <p className="text-2xl font-normal">
        BlogPlace is a blogging website with some basic features where users can authenticate
        themselves, post the bolgs and read blogs written by other people.
      </p>
      <p className="text-xl font-semibold">Technolgies used:</p>
      <ul>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>
      <p>
        Developed by:{" "}
        <Link href="https://www.linkedin.com/in/yana-gupta/" className="text-blue-500 underline underline-offset-4" target="_blank">
          Yana Gupta{" "}
        </Link>
        
      </p>
    </main>
  )
}

export default About
