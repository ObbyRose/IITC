import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  const handleInput = (e) => {
    console.log("you typed something");
    setText(e.target.value)
  }
  return (
    <>
      <div>
        <h1>Input in react</h1>
        <label htmlFor="input">Type something</label>
        <input value={text} type="text" name="input" id='input' onChange={handleInput} />
      </div>
    </>
  )
}

export default App
