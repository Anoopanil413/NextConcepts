//You can use usePathname() to determine if a link is active


export default function UsingLinks(){
    return(
        <>

        <section>
            <h1>
                Using Links
            </h1>
            <p>
            The App Router uses a hybrid approach for routing and navigation. On the server, your application code is automatically code-split by route segments. And on the client, Next.js prefetches and caches the route segments. This means, when a user navigates to a new route, the browser doesn't reload the page, and only the route segments that change re-render - improving the navigation experience and performance.
            </p>
        </section>
        <br/>
        <section>
            <p>
        see prefetching, catching , code spliting, Partial rendering
            </p>
            <br/>
            <a href="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching" className="hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Clik to visit</a>

        </section>
        </>
    )
}