import React from "react";
import '../Head/Head.css'

//component import
import PrepTime from "../IntroPrep/PrepTime.jsx";
import Intro from "../IntroPrep/Intro.jsx"

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