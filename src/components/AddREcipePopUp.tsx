import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";

type Props = {
    closeForm_AddRecipeComponent: (event: boolean) => void;
}

interface RecipeFormData {
    recipe_id: number;
    enlistDate: string;
    title: string;
    description: string;
    ingredients: string[];
    image_url: string;
    category: string;
}

export default function AddREcipePopUp({ closeForm_AddRecipeComponent }: Props) {

    const [recipedata, setrecipedata] = useState<RecipeFormData>({
        recipe_id: Date.now(),
        enlistDate: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`,
        title: "",
        description: "",
        ingredients: [],
        image_url: "",
        category: ""
    });

    const closeFormPopup = (): void => {
        closeForm_AddRecipeComponent(false);
    }

    const handleInputFieldData = (e: React.ChangeEvent<HTMLInputElement>):void => {
        let name: string = e.target.name;
        let value: string = e.target.value;

        if (name === "ingredients") {
            let ingre_val: string[] = value.split(",");
            setrecipedata({ ...recipedata, [name]: ingre_val });
        } else {
            setrecipedata({ ...recipedata, [name]: value });
        }

    }

    const handleTextareaData = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
        let name: string = e.target.name;
        let value: string = e.target.value;
        setrecipedata({ ...recipedata, [name]: value });
    }

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
        console.log(recipedata);
    }

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center backdrop-blur-md z-10">

                <motion.form initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="bg-orange-100 w-11/12 sm:w-2/3 px-7 pt-4 pb-6 mt-16 rounded-xl h-max relative" encType="multipart/form-data" onSubmit={handleFormSubmit}  onReset={() => setrecipedata({
                    recipe_id: Date.now(),
                    enlistDate: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`,
                    title: "",
                    description: "",
                    ingredients: [],
                    image_url: "",
                    category: ""
                })}>

                    <div id="cancel">
                        <i className="fa-solid fa-circle-xmark text-red-500 text-3xl cursor-pointer absolute -right-2 -top-3" onClick={closeFormPopup}></i>
                    </div>

                    <div className="mt-2 max-sm:text-sm">
                        <div id="title-box" className="mb-2">
                            <label htmlFor="recipe-title">Enter Recipe Name</label><br />
                            <input type="text" value={recipedata.title} onChange={handleInputFieldData} name="title" placeholder="Enter the Recipe Name here" className="mt-1 px-3 py-2 w-full rounded-md border-yellow-400 border-2" required />
                        </div>

                        <div className="flex flex-col gap-3 items-start xl:flex-row xl:gap-10 xl:items-center justify-start mb-2">
                            <div id="date-box">
                                <label htmlFor="date">Date of Enlistment : </label>
                                <input type="text" name="enlistDate" value={recipedata.enlistDate} className="ml-3 px-3 py-2 w-1/2 rounded-md border-yellow-400 border-2" disabled />
                            </div>

                            <div id="category-box">
                                <label htmlFor="category">Specify the category : </label>
                                <input type="radio" name="category" value={"veg"} onChange={handleInputFieldData} className="ml-3 size-5" />
                                <label htmlFor="veg" className="ml-1">Veg</label>
                                <input type="radio" name="category" value={"non-veg"} onChange={handleInputFieldData} className="ml-3 size-5" />
                                <label htmlFor="non-veg" className="ml-1">Non-Veg</label>
                            </div>
                        </div>

                        <div id="ingrediants-box" className="mb-2">
                            <label htmlFor="ingredients">Specify The ingredients</label><br />
                            <input type="text" name="ingredients" value={recipedata.ingredients} onChange={handleInputFieldData} className="mt-1 px-3 py-2 w-full rounded-md border-yellow-400 border-2" placeholder="Enter the ingredients" required /><br />
                            <section className="text-xs sm:text-sm">Each ingredients must be comma (,) separated</section>
                        </div>

                        <div id="description-box" className="mb-2">
                            <label htmlFor="description">Procedural Description</label><br />
                            <textarea name="description" className="w-full h-32 mt-1 p-3 rounded-md border-yellow-400 border-2" placeholder="Enter the procedure" value={recipedata.description} onChange={handleTextareaData} required></textarea>
                        </div>

                        <div id="image" className="mb-2">
                            <input type="file" name="image_url" value={recipedata.image_url} onChange={handleInputFieldData} className="mt-1 px-3 py-2 w-full md::w-1/2 rounded-md border-yellow-400 border-2" required />
                        </div>

                        <div id="action-buttons" className="mt-1 flex flex-row justify-end gap-8">
                            <button type="submit" className="bg-darkShade px-3 py-2 rounded-lg text-white">Submit</button>
                            <button type="reset" className="bg-blue-200 px-3 py-2 rounded-lg">Reset</button>
                        </div>

                    </div>
                </motion.form>

            </motion.div>
        </AnimatePresence>
    )
}