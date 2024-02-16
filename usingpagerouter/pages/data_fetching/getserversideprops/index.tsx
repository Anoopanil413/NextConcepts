import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Repo = {
  name: string
  stargazers_count: number
}
 
export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo: Repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>
 
export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
        <section>
            <h1>
            getServerSideProps
            </h1>
            <h2>
            getServerSideProps is a Next.js function that can be used to fetch data and render the contents of a page at request time.
            </h2>
            <h4>
            Behavior
            </h4>
getServerSideProps runs on the server.
getServerSideProps can only be exported from a page.
getServerSideProps returns JSON.
When a user visits a page, getServerSideProps will be used to fetch data at request time, and the data is used to render the initial HTML of the page.
props passed to the page component can be viewed on the client as part of the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props.
When a user visits the page through next/link or next/router, Next.js sends an API request to the server, which runs getServerSideProps.
You do not have to call a Next.js API Route to fetch data when using getServerSideProps since the function runs on the server. Instead, you can call a CMS, database, or other third-party APIs directly from inside getServerSideProps.
   
        </section>
        <section>
            <h1>
            Caching with Server-Side Rendering (SSR)
            </h1>
You can use caching headers (Cache-Control) inside getServerSideProps to cache dynamic responses. For example, using stale-while-revalidate.
          
        </section>
      <p>{repo.stargazers_count}</p>
    </main>
  )
}