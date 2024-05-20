import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { UserButton, currentUser } from '@clerk/nextjs/server'

type Props = {}

const Navbar = async (props: Props) => {
  const user = await currentUser()
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-20 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[8px]">
        <Image 
        src="/flowgridLogo.png" 
        alt="flowgrid logo" 
        width={25} 
        height={25} 
        className="shadow-sm" 
        />
        <p className="text-3xl font-bold">Flowgrid</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        {/* <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul> */}
      </nav>
      <aside className="flex items-center gap-8">
         <ul className="flex items-center gap-4 list-none">
            <li>
              <Link href="#">Documentation</Link>
            </li>
          </ul>
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#327EFF_0%,#FF6446_33%,#FFDE2D_67%,#327EFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-2 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? 'Dashboard' : 'Get Started'}
          </span>
        </Link>
        {user ? <UserButton afterSignOutUrl="/" /> : null}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  )
}

export default Navbar