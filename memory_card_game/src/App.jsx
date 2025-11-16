import React, { useEffect, useState } from 'react'
import PageHeader from './components/PageHeader'
import GameSpace from './components/GameSpace'

const cardValues = [
  "🍇","🍈","🍉","🍊","🍋","🍋‍🟩","🍌","🍏",
  "🍇","🍈","🍉","🍊","🍋","🍋‍🟩","🍌","🍏"
]

// Fisher-Yates shuffle
const shuffleArray = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function App() {
  const [score, setScore] = useState(0) // number of matched pairs
  const [cards, setCards] = useState([])
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [isChecking, setIsChecking] = useState(false)
  const [moves, setMoves] = useState(0)

  const initializeGame = () => {
    const shuffledValues = shuffleArray(cardValues)
    const finalCards = shuffledValues.map((value, index) => ({
      id: index,            // index is fine since we recreate on shuffle
      value,
      isFlipped: false,
      isMatched: false
    }))
    setCards(finalCards)
    setFirstCard(null)
    setSecondCard(null)
    setIsChecking(false)
    setMoves(0)
    setScore(0)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  // derive score from cards whenever cards update
  useEffect(() => {
    const matchedPairs = cards.filter(c => c.isMatched).length / 2
    setScore(matchedPairs)
  }, [cards])

  // called when user clicks a card
  const handleCardClicked = (card) => {
    // guard rails
    if (isChecking) return
    if (card.isFlipped || card.isMatched) return
    if (firstCard && card.id === firstCard.id) return // clicked same card

    // flip the clicked card immediately
    setCards(prev => prev.map(c => c.id === card.id ? { ...c, isFlipped: true } : c))

    // if this is the first selection
    if (!firstCard) {
      setFirstCard(card)
      return
    }

    // second selection
    setSecondCard(card)
    setIsChecking(true)
    setMoves(m => m + 1)

    // check match after a short delay so user sees the second card
    setTimeout(() => {
      setCards(prevCards => {
        const isMatch = firstCard.value === card.value
        return prevCards.map(c => {
          if (c.id === firstCard.id || c.id === card.id) {
            if (isMatch) return { ...c, isMatched: true, isFlipped: true }
            return { ...c, isFlipped: false }
          }
          return c
        })
      })

      // reset selections
      setFirstCard(null)
      setSecondCard(null)
      setIsChecking(false)
    }, 800) // 800ms delay to show second card
  }

  const resetGame = () => {
    // simple: re-initialize and reshuffle
    initializeGame()
  }

  return (
    <div className='bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-700 h-dvh flex flex-col justify-center items-center gap-10 min-h-screen p-6'>
      <PageHeader score={score} moves={moves} onReset={resetGame} />
      <GameSpace cardValues={cards} onClick={handleCardClicked}/>
    </div>
  )
}

export default App
