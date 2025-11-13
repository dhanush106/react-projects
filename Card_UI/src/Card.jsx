import React from 'react'
// h-[420px] w-[355px]
function Card() {
  return (
    <div className='h-auto  w-[355px] bg-white/30 backdrop-blur-[7px] shadow-lg shadow-black/40 rounded-lg p-4 flex flex-col items-start'>
      <div className='bg-[url(/src/assets/profile.jpeg)] cursor-grab bg-center bg-no-repeat bg-cover border-4 w-full h-[220px] rounded-2xl transition delay-150 duration-300 ease-in-out drop-shadow-2xl drop-shadow-cyan-50 hover:-translate-y-20 hover:scale-120'></div>
      <div className='flex gap-4 flex-wrap text-black mt-7'>
        <h1 className='text-xl hover:text-indigo-600 cursor-cell bg-amber-50/20 p-2 rounded-2xl hover:bg-white/61'>Luffy</h1>
        <h1 className='text-xl hover:text-indigo-600 cursor-cell bg-amber-50/20 p-2 rounded-2xl hover:bg-white/61'>Mugi-Wara</h1>
        <h2 className='text-xl hover:text-indigo-600 cursor-cell bg-amber-50/20 p-2 rounded-2xl hover:bg-white/61'>One Peice</h2>
        <div className='flex shadow-lg shadow-black/20 mx-auto rounded-2xl bg-white/20 text-black py-2 px-5 backdrop-blur-4xl hover:bg-gray-700/20 transistion duration-300 ease-linear hover:text-cyan-300 hover:text-bold'>
            <span className='text-6xl text-center cursor-pointer hover:'>🍇</span>
            <h1 className='text-[20px] my-auto'>Gum-Gum Fruit User</h1>
        </div>
        <div className='flex justify-around w-full px-2 gap-7'>
            <button className='bg-black/50 shadow-lg shadow-black/20 cursor-pointer hover:bg-black transition duration-400 ease-out px-4 py-2 rounded-md flex-3 hover:text-cyan-400 text-shadow-md hover:text-shadow-cyan-300 text-cyan-200'>Know More ...</button>
            <button className='shadow-lg shadow-black/20 flex-1 hover:bg-green-300 rounded-md cursor-pointer hover:flex-4 transition-all duration-450 ease-in-out '>❤️</button>
            {/* <button>❤️</button> */}
        </div>
      </div>
    </div>
  )
}

export default Card
