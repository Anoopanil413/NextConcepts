import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return(<>
  <p>we se Post: {router.query.slug}</p>

  <h2>
    convention for dynamic routes, this takes the root path that is post also
  </h2>
  </>) 
}