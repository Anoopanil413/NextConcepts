

"use client"

import { useDebugValue, useEffect, useState } from "react"

function counter(){
    const[count,setCount] = useState(0)



    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 4000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);

      return count
 
}

export default function MyCounter(){
    const count = counter()

    return(
        <>
        <section>
            <h1>
                HEY counter:{count}
            </h1>
        </section>
        </>
    )
}