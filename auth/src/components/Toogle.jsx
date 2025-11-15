import React, { useState } from 'react'
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';

function Toogle() {
    const [toogleStat, setToogleStat] = useState('login');
  return (
    <div className='text-black text-lg bg-white/70 shadow-lg shadow-green-400 px-4 py-3 rounded-2xl'>
        <div className='flex justify-around p-3 rounded-2xl shadow shadow-gray-300 gap-12 mb-10'>
            <button 
            onClick={(e)=>{setToogleStat('login');}}
            className={`px-3 py-1 cursor-pointer 
                ${toogleStat === 'login' 
                    ? 'bg-green-300 rounded-lg text-bold' 
                    : 'border-b-2 border-b-green-500 text-green-600 drop-shadow-lg hover:bg-green-300/60 rounded-md hover:text-black hover:drop-shadow-green-400 transition duration-350 scale-110'}`}
            >Login</button>
            <button
                onClick={()=>{setToogleStat('signin');}}
                className={`px-3 py-1 cursor-pointer 
                    ${toogleStat === 'signin' 
                        ? 'bg-green-300 rounded-lg text-bold ' 
                        : 'border-b-2 border-b-green-500 text-green-600 drop-shadow-lg hover:bg-green-300/60 rounded-md hover:text-black hover:drop-shadow-green-400 transition duration-350 scale-110'}`}
            >SignIn</button>
        </div>
        <div className=''>
            {toogleStat === 'login' ? <Login /> : <SignIn />}
        </div>
    </div>
  )
}

export default Toogle
