import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
  const router = useRouter()
  return (
    <div>
        {/* <nav className='shadow-md h-15 flex flex-row w-full bg-red-200'>
            <li className={router.pathname == "/" ? "bg-yellow-500 shadow-lg shadow-sky-500/50 text-white list-none h-10 rounded-md " : "list-none"}>
              <Link href="/">Articuno</Link>
            </li>
            <div className=' flex flex-row bg-orange-500 ml-96'>
              <li className={router.pathname == "/signup" ? "bg-sky-500 shadow-lg shadow-sky-500/50 text-white list-none h-10 rounded-md ml-96" : "list-none ml-96"}>
                <Link href="/signup">sign up</Link>
              </li>
              <li className={router.pathname == "/login" ? "bg-sky-500 shadow-lg shadow-sky-500/50 text-white list-none h-10 rounded-md" : "list-none"}>
                <Link href="/login">login</Link>
              </li>
            </div>
        </nav> */}
        <nav className='flex items-center flex-wrap shadow-md h-15 p-3'>
              <Link href="/" className={router.pathname == "/" ? "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white " : "list-none items-center justify-center text-yellow-500 font-bold text-xl"}>
                Zapdos
              </Link>
              <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                  <Link href="/signup" className={router.pathname == "/signup" ? "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white mr-5" : "list-none mr-5"}>
                      signup
                  </Link>
                  <Link href="/login" className={router.pathname == "/login" ? "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white mr-5" : "list-none mr-5"}>
                      login
                  </Link>
                </div>
              </div>
        </nav>
    </div>
  )
}

export default Navbar