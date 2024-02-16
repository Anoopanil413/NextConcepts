import Post from "@/componets/posts";
import { Suspense } from "react";
import Loading from "../loading";


    //for seeing the error page try it with reject in postcomponent


export default function StreamPage() {
    return (
        <>
        <section className="min-h-80 bg-green-500">
            <h1>
                Some other data that doesnt require fetching
            </h1>
        </section>
        <Suspense fallback={<Loading/>}>
            <div className=" min-h-80 bg-blue-500">


        <Post/>
            </div>
        </Suspense>
        </>
    )
}