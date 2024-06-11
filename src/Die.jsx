export default function Die(props) {

  const dieColor = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
  }

  const diceNum = []
  for (let i = 0; i < props.value; i++) {
    diceNum.push(props.value)
  }

  const generateKey = (item, index) => `${item}-${index}`;

  return (
      <div className="die-face" style={dieColor} onClick={props.holdDice}>
        {/* <h2 className="die-num">{props.value}</h2> */}
        {diceNum.map((dieNum, index) =>
          <span key={generateKey(dieNum, index)} className="pip"></span>
        )}
      </div>
  )
}