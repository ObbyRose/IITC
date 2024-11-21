import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

//Page Import
import About from "../pages/About/About.jsx"
import Home from "../pages/Home/Home.jsx"
import Dashboard from "../pages/Dashboard/Dashboard.jsx"
import Articles from "../pages/Articles/Articles.jsx"
import Tech from "../pages/Articles/Tech/Tech.jsx"
//components Import
import Navbar from "../Components/Navbar.jsx"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/articles" element = {<Articles/>}>
          <Route path="news" element={<h2>This is News section</h2>}/>
          <Route path="politics" element={<h2>This is Politics section</h2>}/>
          <Route path="tech/:id" element={<Tech />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
