import React from "react";
import './MainContainer.css'

// component import
import Head from "./Head.jsx";
import Recipe from "./Recipe.jsx";

const MainContainer = () => {

    return(
        <div className="main-container">
            Hello to container
            <Head/>
            <Recipe/>
        </div>
    )
}

export default MainContainer