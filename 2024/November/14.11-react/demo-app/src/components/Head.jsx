import React from "react";
import './Head.css'

//component import
import Intro from "./Intro.jsx";
import PrepTime from "./PrepTime.jsx";

const Head = () => {
    return (
        <div className="head">
            This is the head
            <Intro/>
            <PrepTime/>
        </div>
    )
}

export default Head