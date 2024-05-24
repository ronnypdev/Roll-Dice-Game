import React from "react"

export default function Die(props) {
  
  const dieColor = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
  }

  return (
      <div className="die-face" style={dieColor}>
          <h2 className="die-num">{props.value}</h2>
      </div>
  )
}