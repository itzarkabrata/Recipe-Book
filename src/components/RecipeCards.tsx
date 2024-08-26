import { useState } from "react";
import RecipePopup from "./RecipePopup";

type Props = {
  dataobj : {
    recipe_id : number;
    title : string;
    description : string;
    ingredients : string[];
    image_url : string;
    category : string;
  }
}

interface BackgroundCardStyle{
  background : string;
  backgroundSize : string;
}

export default function RecipeCards({dataobj}: Props) {

  const bgStyle:BackgroundCardStyle = {
    background : `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)) , url("${dataobj.image_url}")`,
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
        
        {showRecipePopup && <RecipePopup func1={closeCardPopup} dataobj={dataobj}/>}
        <div className="flex max-sm:flex-col justify-between items-center gap-5 w-full h-44 p-2 sm:p-5 rounded-xl cursor-pointer" style={bgStyle} onClick={handleRrecipePopUp}>
            <div id="recipe-image" className=" max-sm:h-[60%] max-sm:w-[90%] sm:min-w-40 lg:min-w-44 xl:min-w-48 rounded-xl shadow-black shadow-2xl max-sm:max-h-[96px] max-sm:max-w-[168px]">
                <img className="h-full w-full max-h-[96px] max-w-[168px] rounded-xl" src={dataobj.image_url} alt="image"/>
            </div>
            <div id="recipe-title" className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold text-white [text-shadow:_0.2px_0.2px_5px_black] w-2/3">
                {dataobj.title}
            </div>
        </div>
    </div>
  )
}