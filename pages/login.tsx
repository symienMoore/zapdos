import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useForm } from 'react-hook-form';
import { auth } from '../firebase.client';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const login = (data: any) => {
signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  return (
    <div>
         <form className='flex flex-col w-96 mx-auto mt-40 p-8 shadow-md border rounded-md' onSubmit={handleSubmit(login)}>
            <h3 className='text-2xl font-bold text-yellow-500 place-content-center'>Welcome back!</h3>
            <label>Email</label>
                <input className='border border-yellow-500 p-2 rounded-sm' type="email" placeholder='someone@example.com' {...register("email", { required: true })}/>
            <label>Password</label>
                <input className='border border-yellow-500 p-2 rounded-sm' type="password" placeholder='******'{...register("password", { required: true, minLength: 8 })}/>
            <button className='bg-yellow-500 p-2 text-white rounded-sm' type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login