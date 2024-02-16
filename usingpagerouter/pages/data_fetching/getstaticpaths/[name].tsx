import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
  } from 'next'
   
  type Repo = {
    name: string
    stargazers_count: number
  }
   
  export const getStaticPaths = (async () => {
    return {
      paths: [
        {
          params: {
            name: 'next.js',
          },
        }, // See the "paths" section below
      ],
      fallback: true, // false or "blocking"
    }
  }) satisfies GetStaticPaths
   
  export const getStaticProps = (async (context) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { props: { repo } }
  }) satisfies GetStaticProps<{
    repo: Repo
  }>
   
  export default function Page({
    repo,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
        <section>
            <h1>
            getStaticPaths
            </h1>
            <h2>
            getStaticPaths allows you to control which pages are generated during the build instead of on-demand with fallback. Generating more pages during a build will cause slower builds.

You can defer generating all pages on-demand by returning an empty array for paths. This can be especially helpful when deploying your Next.js application to multiple environments. For example, you can have faster builds by generating all pages on-demand for previews (but not production builds). This is helpful for sites with hundreds/thousands of static pages.
            </h2>
            <h3>
            In development (next dev), getStaticPaths will be called on every request.


            </h3>
        </section>
        <section>

            <h2>
                {repo.stargazers_count}
            </h2>
        </section>
        </>
    )
  }