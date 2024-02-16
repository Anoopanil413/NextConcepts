import { useRouter } from 'next/router'
 
export default function ReadMore() {
    //using useRouter hook
  const router = useRouter()
 
  return (
    <button onClick={() => router.push('/routes/posts/5555')}>
      Click here move to dynamic catch all segments example
    </button>
  )
}