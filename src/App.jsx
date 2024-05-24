import { useState } from 'react'
import Die from "./Die"
import './App.css'

function App() {
  const [dieNumbers, setDieNumbers] = useState(allNewDice())

  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(Math.ceil(Math.random() * 6))
      }
      return newDice
  }

  const dieElement = dieNumbers.map((die) => {
     return <Die key={die.index} value={ die} />
  })



  return (
    <main>
        <div className="dice-container">
          {dieElement}
        </div>
    </main>
  )
}

export default App
