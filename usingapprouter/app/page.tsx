


import ChatApp from "@/componets/messages";
import AppSearch from "@/componets/usedeffer";
import MylayoutApp from "@/componets/uselayoutdif";
import VideoApp from "@/componets/usingforwardref";
import Link from "next/link";

export default function Home() {
  return (
<>
<section>
  <h1>HEloooo</h1>
   <Link href="/dashboard">Dashboard</Link>
   <AppSearch/>
   {/* <ChatApp/> */}
   <VideoApp/>
   {/* <MylayoutApp/> */}
</section>
</>
  );
}
