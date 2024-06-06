import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // getting store values from local storage
  // parse() : Accepts a JSON string as a parameter, and returns the corresponding JavaScript Object
  const savedScore = localStorage.getItem(key)
  const initialScore = JSON.parse(savedScore)
  return initialScore || defaultValue
}

export default function useLocalStorage(key, defaultValue) {
  const [score, setScore] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  // this hook stores the data in local
  // stringify() Accepts an object as a parameter, and returns the equivalent JSON string.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(score))
  }, [key, score])

  return [score, setScore]
}
