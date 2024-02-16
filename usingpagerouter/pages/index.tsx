import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div>
      <section>
        <h1>
          Helooooo
        </h1>
      </section>
      <section className="gap-4">
      <ul >
      <li>
        <p>
          Using the Link component in next for routing, its features are if a link is present in the page it prerendres the page for the route link if prerendering possible

        </p>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/routes/post">Learn routes</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
      </section>

      <section>
        <h1>Types of Rendering in next.js</h1>
        <ul>
          <li>
          <h1>Server-side Rendering (SSR)</h1>
          <p>
            If a page uses Server-side Rendering, the page HTML is generated on each request.To use Server-side Rendering for a page, you need to export an async function called getServerSideProps. This function will be called by the server on every request.

          </p>
          <Link href='/'>Component using getServerSideProps for server side rendering</Link>
          </li>
          <li>
          <h1>Server-side Rendering (SSR)</h1>
          <p>If a page uses Server-side Rendering, the page HTML is generated on each request.</p>
          </li>
          <li>
          Server-side Rendering (SSR)
          </li>
          <li>
          Server-side Rendering (SSR)
          </li>
        </ul>
      </section>
    </div>
    </>

  );
}
