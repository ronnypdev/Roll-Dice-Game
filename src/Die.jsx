export default function Die(props) {

  const dieColor = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
  }

  /**
   * diceNume is the array
   * that holds all the values being
   * passed down to the die prop
   * which allows to render the random numbers
   * of dice dots
   */
  const diceNum = []
  for (let i = 0; i < props.value; i++) {
    diceNum.push(props.value)
  }

  /**
   *
   * Generates unique keys when mapping over an array
   * @returns
   */
  const generateKey = (item, index) => `${item}-${index}`;

  return (
      <div className="die-face" style={dieColor} onClick={props.holdDice}>
        {diceNum.map((dieNum, index) =>
          <span key={generateKey(dieNum, index)} className="pip"></span>
        )}
      </div>
  )
}