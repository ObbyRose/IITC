import React from "react";

//component import
import Ingredients from "./Ingredients.jsx";
import Instructions from "./Instructions.jsx";
import Nutrition from "./Nutrition.jsx";

const Recipe = () => {
    return (
        <div className="recipe">
            This is the Recipe
            <Ingredients/>
            <Instructions/>
            <Nutrition/>
        </div>
    )
}

export default Recipe