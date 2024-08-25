import { useState } from "react"
import AddREcipePopUp from "./AddREcipePopUp";

type Props = {}

export default function AddRecipeButton({}: Props) {

    const [showRecipeAddForm , setshowRecipeAddForm] = useState<boolean>(false);

    const showForm = ():void=>{
        setshowRecipeAddForm(true);
    }

    const closeForm = (event:boolean)=>{
        setshowRecipeAddForm(event);
    }

  return (
    <>
    {showRecipeAddForm && <AddREcipePopUp closeForm_AddRecipeComponent={closeForm}/>}
    <div className="flex flex-row justify-evenly items-center h-16 w-16 sm:h-16 sm:w-40 bg-darkShade rounded-full sm:rounded-xl cursor-pointer" onClick={showForm}>
        <div id="add-icon">
            <i className="fa fa-solid fa-add text-lg font-semibold text-white [text-shadow:_0.1px_0.1px_2px_black]"></i>
        </div>
        <div className="font-semibold text-lg text-white [text-shadow:_0.1px_0.1px_2px_black] max-sm:hidden">
            Add Recipe
        </div>
    </div>
    </>
  )
}