'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Buttonfun from './button'


export default function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''} bg-indigo-300 `} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/dashboard' ? 'active' : ''} bg-indigo-300 `}
            href="/dashboard"
          >
            About
          </Link>
        </li>
      </ul>
      <Buttonfun/>
    </nav>
  )
}