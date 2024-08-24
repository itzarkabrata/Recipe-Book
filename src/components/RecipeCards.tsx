import { useState } from "react";
import RecipePopup from "./RecipePopup";

type Props = {
  recipe_title : string;
  recipe_img : string;
}

interface BackgroundCardStyle{
  background : string;
  backgroundSize : string;
}

export default function RecipeCards({recipe_title,recipe_img}: Props) {

  const bgStyle:BackgroundCardStyle = {
    background : `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)) , url("${recipe_img}")`,
    backgroundSize : "cover"
  };

  const [showRecipePopup, setshowRecipePopup] = useState<boolean>(false);

  const handleRrecipePopUp = ():void=>{
    setshowRecipePopup(true);
  }

  const closeCardPopup = (event:boolean):void=>{
    setshowRecipePopup(event);
  }

  return (
    <div>
        
        {showRecipePopup && <RecipePopup func1={closeCardPopup}/>}
        <div className="flex justify-between items-center gap-5 w-full h-36 p-2 sm:p-5 rounded-xl cursor-pointer" style={bgStyle} onClick={handleRrecipePopUp}>
            <div id="recipe-image" className="w-40 lg:w-44 xl:w-48 rounded-xl shadow-black shadow-2xl">
                <img className="h-auto rounded-xl" src={recipe_img} alt="image"/>
            </div>
            <div id="recipe-title" className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold text-white [text-shadow:_0.2px_0.2px_5px_black] w-2/3">
                {recipe_title}
            </div>
        </div>
    </div>
  )
}