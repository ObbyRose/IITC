import { Route, Routes } from "react-router-dom"
import { BookList } from "./src/pages/BookList"
import { NewBook } from "./src/pages/NewBook"
import { NotFound } from "./src/pages/NotFound"
import { BookLayout } from "./src/pages/BookLayout"
import { BookRoutes } from "./BookRoutes"

function App () {
    return(
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books/*" element={<BookRoutes />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
)}

export default App