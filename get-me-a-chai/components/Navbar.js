"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const router=useRouter()
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
 

  // 
  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 md:h-16 flex-col md:flex-row items-center'>
      <div >
        <Link href={'/'} className="logo font-bold text-lg gap-2 flex justify-center items-center">
        <img width={44} className="rounded-full" src="/img.gif" alt="" />
        <span className='text-xl md:text-base my-3 md:my-0' > Get Me A Chai!</span>
        </Link>
      </div>
      
      {/* <ul className='flex justify-between gap-8'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sing Up</li>
        <li>Login</li>
      </ul> */}
      <div className='relative flex flex-col gap-4 md:block'>
        {session && <> <button onClick={()=>{
         setShowdropdown(!showdropdown)
        }} 
         id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex items-center justify-center text-white mx-4 bg-blue-600 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5  rounded-base text-sm px-4 py-2.5 focus:outline-none rounded-xl outline-none" type="button">
          Welcome {session.user.email}
          <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
        </button>
          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-32 bg-gray-500 border border-default-medium rounded-base shadow-lg w-44`}>
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" onClick={()=>setShowdropdown(false)} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.username}`}
                onClick={() => setShowdropdown(false)} className="inline-flex items-center w-full p-2  hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
              </li>
              <li>
                <Link href="#" onClick={()=>(
                  setShowdropdown(false),
                  signOut())} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link>
              </li>
            </ul>
          </div></>
        }
        
        {session &&
          <button className='text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5 mx-2 cursor-pointer' onClick={() => { signOut() }} >LogOut</button>
        }
        {!session && <Link href={"/login"}>
          <button className='text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5 mx-2 cursor-pointer' >Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar
