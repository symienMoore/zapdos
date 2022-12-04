import { useEffect, useState } from 'react'
import Alert from '../components/alert'
import {auth} from '../firebase.client'
import Image from 'next/image'

const UserPage = () => {
  return (
    <div>
      <h1>{auth.currentUser.displayName}</h1>
    </div>
  )
}

const LoginPage = () => {
  return (
    <div>
      Welcome!
    </div>
  )
}

export default function Home({}) {
  const [user, setUser] = useState<any>()
  useEffect(() => {
    if(auth.currentUser) {
      setUser(auth.currentUser)
    }
  }, [])
  
  return (
    <div>
      {user ?
        <UserPage /> : 
        <LoginPage />
      }
    </div>
  )
}
