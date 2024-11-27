import { useState } from 'react'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
      <h1>Redux Cart (with toolkit)</h1>
      <Products />
      <Cart />
    </div>
  )
}

export default App
