export default function ASO(){
    return(
        <>
        <h2>
        Next.js automatically determines that a page is static (can be prerendered) if it has no blocking data requirements. This determination is made by the absence of getServerSideProps and getInitialProps in the page.

This feature allows Next.js to emit hybrid applications that contain both server-rendered and statically generated pages.
        </h2>
        </>
    )
}