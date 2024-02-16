export default function Blog({ posts }) {

    return(
        <>
        <h1>
        If a page uses Static Generation, the page HTML is generated at build time. That means in production, the page HTML is generated when you run next build. This HTML will then be reused on each request. It can be cached by a CDN.

In Next.js, you can statically generate pages with or without data. Let's take a look at each case.        </h1>
        {
          posts && (posts.map((user)=>{
            return(
              <div key={user.id}>
                <p>{user.name}</p>
                <p>
                  {user.email}
                </p>

              </div>
            )
          }))
        }

        </>
    )


  }
   
  // This function gets called at build time
  export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await res.json()
   
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }