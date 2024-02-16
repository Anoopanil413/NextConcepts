export default function Post({ post }) {
    // Render post...
    return (
      <div>
        <section>
            <h1>
            fallback: false:
            </h1>
Significance: With fallback: false, Next.js serves a 404 page for paths that were not pre-generated during the build process. This is suitable when you have a finite number of dynamic paths and you want to ensure that only those paths are accessible.
Use cases: Use this option when you know all possible dynamic paths at build time and you want to enforce strict routing, ensuring that only valid paths are accessible.
           
        </section>
        <section>
            <h1>
            fallback: true:

</h1>
Significance: With fallback: true, Next.js allows the page to be generated on-demand for paths that were not pre-generated during the build process. When a user requests a path that wasn't pre-generated, Next.js generates the page on-the-fly and serves it to the user. Additionally, it regenerates the static page for that path in the background so subsequent requests are served statically.
Use cases: This is useful when you have a large number of dynamic paths, and it's not feasible to pre-generate all of them during the build process. It's also suitable for scenarios where the content for dynamic paths changes frequently, as it ensures the latest content is always served.
           
        </section>
        <section>
            <h1>
            fallback: 'blocking':

</h1>
Significance: Similar to fallback: true, but with fallback: 'blocking', the user's request is held until the page is generated on-demand at request time. This means it does not respond with a loading state immediately. Once the page is generated, it's served to the user.
Use cases: Use this option when you want to generate pages on-demand like with fallback: true, but you also want to ensure the user's request is not fulfilled until the page is ready. This can be useful for SEO purposes as it avoids serving an empty or loading state to search engine crawlers.
           
        </section>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
  
  export async function getStaticPaths() {
    // Fetch all posts from the API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    // Generate paths for each post
    const paths = posts.map(post => ({
      params: { id: String(post.id) } // Convert id to string
    }));
    console.log("number of ids in path",paths)
    return {
      paths,
      fallback: false // Do not allow fallback
    };
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
  
    // Pass post data to the page via props
    return { props: { post } };
  }
  