import React, { useState } from 'react'
import {User, LockKeyhole, Eye, EyeOff} from 'lucide-react';

function Login() {
    const [passwordStat,setPasswordStat] = useState(true);
  return (
    <div className='bg-green-500/70 backdrop-blur-3xl rounded-3xl'>
        <h1 className='text-center text-3xl p-4 m-4'>Login</h1>
        <div className='m-4 p-4 flex flex-col justify-around items-start'>
            <div className='flex flex-col mx-3 my-2'>
                <label htmlFor="username" className='flex gap-1'><User />UserName:</label>
                <input type="text" id='username' className='border-2 p-2 outline-none border-white/50 rounded-md text-xl'/>
            </div>
            <div className='flex flex-col mx-3 my-2 relative'>
                <label htmlFor="password" className='flex gap-1'><LockKeyhole />Password:</label>
                <input type={`${passwordStat ? 'password' : 'text'}`} id='password' className='border-2 p-2 outline-none border-white/50 rounded-md text-xl'/>
                <button className='absolute right-5 top-10 cursor-pointer'
                    onClick={()=>setPasswordStat(!passwordStat)}
                >{passwordStat ? <Eye /> : <EyeOff />}</button>
            </div>
            <h1 className='mx-auto'>Forgot Password ? <a href="#" className='text-gray-600 hover:underline'>Click Here</a></h1>
            <button
             className='mx-auto mt-4 px-4 py-2 bg-green-300 border-2 border-green-400 drop-shadow-md drop-shadow-emerald-300  cursor-pointer active:drop-shadow-green-900 rounded-2xl hover:bg-emerald-500 transition duration-300 delay-100'
            >Login</button>
        </div>
    </div>
  )
}

export default Login
