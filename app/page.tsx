// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, my name is Mark Loui</h1>

      <p>
        I am a student learning Next.js and web development. I enjoy coding and
        creating different projects.
      </p>

      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </main>
  );
}