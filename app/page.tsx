import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        Hello, my name is Loui!
      </h1>

      <p className="mt-4">
        I am a student interested in programming and web development.
        I enjoy learning new technologies and creating websites.
      </p>

      <Link
        href="/projects"
        className="text-blue-600 underline mt-4 inline-block"
      >
        See My Projects
      </Link>
    </main>
  );
}