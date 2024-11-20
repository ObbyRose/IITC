import { Routes, Route } from "react-router-dom";
import { BookLayout } from "./src/pages/BookLayout";

export function BookRoutes () {
    return (
        <>
        <BookLayout/>
        <Routes>
            <Route path="/books" element = {<BookLayout/>}>
                <Route index element = {<BookList/>} />
                <Route path=":id" element = {<Book/>} />
                <Route path="new" element = {<NewBook/>} />
            </Route>
        </Routes>
        </>
    )
}