import React from 'react'

function GameSpace({ cardValues, onClick }) {
  return (
    <div className='grid grid-cols-4 gap-7 shadow-2xl shadow-black p-6 rounded-2xl'>
      {cardValues.map((card) => (
        <Tile
          key={card.id}
          tile_value={card.value}
          isFlipped={card.isFlipped}
          isMatched={card.isMatched}
          onClick={() => onClick(card)}
        />
      ))}
    </div>
  )
}

const Tile = ({ tile_value, isFlipped, isMatched, onClick }) => {
  // optionally change style if matched
  const matchedClass = isMatched ? 'opacity-60 scale-105 pointer-events-none' : ''

  return (
    <div
      onClick={onClick}
      className={`p-4 bg-stone-900 w-20 h-20 flex items-center justify-center text-3xl cursor-pointer rounded-lg backdrop-blur-3xl hover:scale-110 active:scale-95 hover:bg-stone-800 hover:border-2 hover:border-green-200 shadow-lg transition duration-300 ease-linear ${matchedClass}`}>
      {isFlipped || isMatched ? tile_value : "?"}
    </div>
  )
}

export default GameSpace
