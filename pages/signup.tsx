import React, { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../firebase.client'
import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import Alert from '../components/alert';

const Signup = () => {
const authfb = auth
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const [profilePic, setProfilePic] = useState<any>("")
const [user, setUser] = useState<any>()
const storage = getStorage();
const fileRef = useRef(null)
const [alert, setAlert] = useState<boolean>()


const signup = (data: any) => {
    createUserWithEmailAndPassword(authfb, data.email, data.password)
    .then((userCredential) => {
        const rd = new FileReader()
        rd.readAsDataURL(data.image[0])
    rd.onload = (readerEvent) => {
        setProfilePic(readerEvent.target.result)
    }
    const authuser = userCredential.user;
    setUser(authuser)
    const imageRef = ref(storage, `profile_images/${user.uid}/p`)
    uploadString(imageRef, profilePic, 'data_url').then(async () => {
    const downloadurl = await getDownloadURL(imageRef)
    return downloadurl
    }).then((downloadurl) => {
        updateProfile(user, {
            displayName: data.username,
            photoURL: downloadurl
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error', errorMessage)
    setAlert(true)
  });
})}

{alert &&
    <Alert message="there was an error with signing in" error={true}/>
}

  return (
    <div>
        <form className='flex flex-col w-96 mx-auto mt-40 p-8 shadow-md border rounded-md' onSubmit={handleSubmit(signup)}>
            <h3 className='text-2xl font-bold text-sky-500 place-content-center'>Welcome!</h3>
            <label>Name</label>
                <input className='border border-sky-500 p-2 rounded-sm' type="text" placeholder='john smith' {...register("name", { required: true })}/>
            <label>Email</label>
                <input className='border border-sky-500 p-2 rounded-sm' type="email" placeholder='someone@example.com' {...register("email", { required: true })}/>
            <label>Userame</label>
                <input className='border border-sky-500 p-2 rounded-sm' type="text" placeholder='a really cool username'{...register("username", { required: true })}/>
            <label>Password</label>
                <input className='border border-sky-500 p-2 rounded-sm' type="password" placeholder='******'{...register("password", { required: true, minLength: 8 })}/>
            <label>Profile picture</label>
                <input type="file" {...register("image")}/>
            <button className='bg-sky-500 p-2 text-white rounded-sm' type="submit">sign up</button>
        </form>
    </div>
  )
}

export default Signup