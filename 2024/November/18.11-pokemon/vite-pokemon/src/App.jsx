import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PokeBall from '../components/PokeBall'
import Pokemon from '../components/Pokemon/Pokemon';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokeBall />}/>
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
