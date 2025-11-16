import React, { useState } from 'react'

function PageHeader({score=0, moves=0, onReset}) {
  return (
    <div className='p-3 shadow shadow-gray-700 bg-gray-700 px-9 py-5 rounded-xl'>
      <h1 className='text-4xl drop-shadow-sm drop-shadow-gray-900'>🎮Memory Card Game</h1>
      <div className='flex justify-around mt-6 text-2xl'>
        <div>
            <h1>Score:</h1>
            <h2 className='text-center'>{score}</h2>
        </div>
        <div>
            <h1>Moves:</h1>
            <h2 className='text-center'>{moves}</h2>
        </div>
      </div>
      <div className='flex justify-center m-3'>
          <button onClick={onReset} className='bg-emerald-950 px-4 py-2 rounded-lg shadow-sm hover:shadow-green-200 active:shadow-emrald-950 text-green-300 hover:bg-green-200 hover:text-black cursor-pointer transition duration-300 ease-in-out'>🔄️ New Game</button>
      </div>
    </div>
  )
}

export default PageHeader
