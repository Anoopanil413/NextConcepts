import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return(<>
  <p>we se Post: {router.query.slug}</p>
  <p>convention for dynamic routes</p>

  <h2>
    this is catch all segments, chekout for optional catch all segments in post route difference is is it also takes the root path
  </h2>
  </>) 
}