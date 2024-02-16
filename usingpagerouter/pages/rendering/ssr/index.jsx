




export default function Page({ data }) {

    return(
        <>
        <h1>
            page Using server side rendering
        </h1>
        {
          data && (data.map((user)=>{
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
   
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
  }