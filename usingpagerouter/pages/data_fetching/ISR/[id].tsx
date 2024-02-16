import React from 'react';

function Blog({ posts }: any) {
  return (
    <>
    <section>
      <h1>
      getStaticProps Function:
      </h1>
This function is called at build time and also whenever a request comes in or at most once every 10 seconds due to the revalidate option set to 10.
It fetches data for a single post from the external API based on the dynamic params.id.
The fetched data is passed as props to the page component.
   
    </section>
    <section>
      <h1>
      getStaticPaths Function:
      </h1>
      This function is also called at build time.
It fetches all posts from the external API and generates paths for each post.
These paths are used to pre-render the pages at build time.
    </section>
    <section>
      <h1>
      fallback: 'blocking':
      </h1>
      With this configuration, Next.js will server-render pages on-demand if the path doesn't exist.
This means that if a user requests a path that wasn't pre-rendered at build time, Next.js will generate the page on-the-fly and serve it to the user, ensuring the latest content is always available.
    </section>
    <ul>
      <li>{posts.title}</li>
      
    </ul>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  // Fetch data for a single post (e.g., the latest post) from an external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  // Fetch all posts from an external API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: any) => ({
    params: { id: String(post.id) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

export default Blog;
