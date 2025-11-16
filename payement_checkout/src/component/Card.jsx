import React, { useState } from 'react'

function Card() {
    const [number, setNumber] = useState("0000000000000000");
    const [name, setName] = useState("------------")
    const [cvv,setCvv] = useState("---");
    const [date, setDate] = useState()
    function n(str = number) {
    const parts = [
        str.slice(0, 4),
        str.slice(4, 8),
        str.slice(8, 12),
        str.slice(12, 16)
    ];
    return parts.join("-");
    }
    const fin_str = n();
  return (
    <div className='bg-gray-800 border-2 p-4 border-cyan-400 drop-shadow-md h-auto w-auto rounded-2xl drop-shadow-cyan-400 flex lg:flex-row flex-col-reverse justify-around items-center gap-10'>
        <div className='flex flex-col gap-4 bg-white/50 backdrop-blur-md p-7 rounded-md'>
            <div className='flex flex-col'>
                <label>CARD NUMBER</label>
                <input type="number" onChange={(e)=>setNumber(e.target.value)} className='border-b-2 outline-0 p-2 border-white/70'/>
            </div>
            <div className='flex flex-col'>
                <label>CARD NAME</label>
                <input onChange={(e)=>setName(e.target.value)} type="text" className='border-b-2 outline-0 p-2 border-white/70'/>
            </div>
            <div className='flex gap-6'>
                <div className='flex flex-col'>
                    <label>Expiry Date</label>
                    <input onChange={(e)=>setDate(e.target.value)} type="month" className='border-b-2 outline-0 p-2 border-white/70'/>
                </div>
                <div className='flex flex-col'>
                    <label>CVV</label>
                    <input type="number" onChange={(e)=>setCvv(e.target.value)} max={3} className='border-b-2 outline-0 p-2 border-white/70'/>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-4 items-center text-2xl mb-7 rounded-4xl border-2 p-6 border-cyan-300 w-2/3 '>
            <h1>{fin_str}</h1>
            <h1>{name.toUpperCase()}</h1>
            <div className='flex justify-around gap-10'>
                <img src="/src/assets/chip.png" width={35} />
                <h1>{cvv}</h1>
                <h1>{date}</h1>
            </div>
        </div>
    </div>
  )
}

export default Card
