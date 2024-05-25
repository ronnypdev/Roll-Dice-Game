import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from "./Die"
import './App.css'

function App() {
  /**
   *  Create state to hold our array of numbers. (Initialize
   * the state by calling our `allNewDice` function so it
   * loads all new dice as soon as the app loads)
  */
  const [dice, setDice] = useState(allNewDice())
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
  /**
   * handleDiceRoll() function
   * which triggers the dice
   * to re render every time the roll dice
   * button is clicked
  */
  /**
 * Challenge: Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 *
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
 */
  function handleDiceRoll() {
    setDice(prevDice =>
      prevDice.map(dice => dice.isHeld ? {...dice, id: nanoid()} : allNewDice())
    )

    // dice => dice.isHeld ? {...dice, id: nanoid()} : allNewDice()
    // setDice(allNewDice())
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
      <div className="dice-container">
        {diceElement}
      </div>
      <button className="roll-dice" onClick={handleDiceRoll}>Roll</button>
    </main>
  )
}

export default App
