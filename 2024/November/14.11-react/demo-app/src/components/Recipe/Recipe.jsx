import React from "react";

//component import
import Ingredients from "../IngredientsInstructionsNutrition/Ingredients.jsx";
import Instructions from "../IngredientsInstructionsNutrition/Instructions.jsx";
import Nutrition from "../IngredientsInstructionsNutrition/Nutrition.jsx"

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