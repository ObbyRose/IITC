import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import PokeBall from '../components/PokeBall.jsx'
import NotFound from '../components/NotFound/NotFound.jsx';
import AboutPage from '../components/AboutPage/AboutPage.jsx';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<PokeBall />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
