import React from 'react'

function App() {


  let [click, setClicked] = React.useState(0)

  function increment() {
    setClicked(click + 1)
  }

  function decrement() {
    setClicked(click - 1)
  }

  let name = "Abhinav"

  return (
    <>
      <h1>Welcome to React: {name}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>Click value: {click}</h1>
    </>
  )
}

export default App
