import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from "./Die"
import './App.css'

function App() {
  /**
   *  Create state to hold our array of numbers. (Initialize
   * the state by calling our `allNewDice` function so it
   * loads all new dice as soon as the app loads)
  */
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [diceRollCount, setDiceRollCount] = useState(0)
  /**
   * allNewDice() function
   * which generates number from 1 to 6
   * inclusive
   * returns an array
   * of 10 random numbers between 1-6 inclusive.
   * @returns newDice
  */
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(
        {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid(),
        }
      )
    }
    return newDice
  }
    useEffect(() => {
    // All dice are held, and
    const allHeld = dice.every(die => die.isHeld)
    // Get the first die value
    const firstValue = dice[0].value
    // All dice have the same value
    const allSameValue = dice.every(die => die.value === firstValue)
    // If both conditions are true, set `tenzies` to true and log
    // "You won!" to the console
    if (allHeld && allSameValue) {
      setTenzies(prevTenzies => !prevTenzies)
    }
  }, [dice])
  /**
   * handleDiceRoll() function
   * which triggers the dice
   * to re render every time the roll dice
   * button is clicked and also rolls the dice that are not being held
  */
  function handleDiceRoll() {
    setDiceRollCount(diceRollCount + 1)
    if (!tenzies) {
      setDice(prevDice =>
        prevDice.map(dice => dice.isHeld ? dice : { ...dice, id: nanoid(), value: Math.floor(Math.random() * 6) + 1 })
      )
    }else {
      setTenzies(false)
      setDiceRollCount(0)
      setDice(allNewDice())
    }
  }
  /**
   *  function `holdDice` that takes
   * `id` as a parameter and console.log(id)
   * Then, figure out how to pass that function down to each
   * instance of the Die component so when each one is clicked,
   * it logs its own unique ID property.
   * flip the `isHeld` property on the object in the array
   * that was clicked, based on the `id` prop passed
  */
  function holdDice(id) {
    setDice(prevDice =>
      prevDice.map(dice =>
        dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
      )
    )
  }
  /**
   * This is the diceElement
   * in order to render inside the
   * dice container
   */
  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      isHeld={die.isHeld}
      holdDice ={() => holdDice(die.id)}
      value={die.value}
    />
  ))

  return (
    <main>
      {tenzies  && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice-container">
        {diceElement}
      </div>

      <div className="dice-information-container">
        <div className="counter">
          <p><span className="emoji">🎲</span>Dice Rolls Attempts: {diceRollCount}</p>
        </div>
        <div className="timer">
          <p><span className="emoji">⌛</span>Timer: 01:23:52</p>
        </div>
        <div className="record">
          <p><span className="emoji">🏆</span>Best Attempts Record: 34</p>
        </div>
      </div>
      <button className="roll-dice" onClick={handleDiceRoll}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
