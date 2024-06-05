import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // getting store values from local storage
  const savedScore = localStorage.getItem(key)
  const initialScore = JSON.parse(savedScore)
  return initialScore || defaultValue
}

export default function useLocalStorage(key, defaultValue) {
  const [score, setScore] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [score, setScore]
}
