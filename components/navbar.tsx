import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { auth } from '../firebase.client'
import Image from 'next/image'


const UserNavbar = () => {
    return (
        <div>
            <nav className='flex items-center flex-wrap shadow-md h-15 p-3'>
                    <Link href="/" className='flex flex-row'>
                        <Image src={auth.currentUser.photoURL} alt="" width={50} height={50} />
                        <p>{auth.currentUser.displayName}</p>
                    </Link>
                    <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href="/user/profile">
                            profile
                        </Link>
                        <Link href="/user/settings" >
                            settings
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const AuthNavbar = () => {
    const router = useRouter()
    return (
        <div>
            <div>
             <nav className='flex items-center flex-wrap shadow-md h-15 p-3'>
              <Link href="/" className={router.pathname == "/" ? "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-sky-500 shadow-lg shadow-sky-500/50 text-white " : "list-none items-center justify-center text-sky-500 font-bold text-xl"}>
                Articuno
              </Link>
                    <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href="/signup" className={router.pathname == "/signup" ? "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-sky-500 shadow-lg shadow-sky-500/50 text-white mr-5" : "list-none mr-5"}>
                            signup
                        </Link>
                        <Link href="/login" className={router.pathname == "/login" ? "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-sky-500 shadow-lg shadow-sky-500/50 text-white mr-5" : "list-none mr-5"}>
                            login
                        </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

const Navbar = () => {
  return (
    <div>
        {auth.currentUser ?
            <UserNavbar /> :
            <AuthNavbar />
        }
    </div>
  )
}

export default Navbar