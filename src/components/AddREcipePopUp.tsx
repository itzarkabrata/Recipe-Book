import { AnimatePresence, motion } from "framer-motion"

type Props = {
    closeForm_AddRecipeComponent: (event: boolean) => void;
}

export default function AddREcipePopUp({ closeForm_AddRecipeComponent }: Props) {

    const closeFormPopup = (): void => {
        closeForm_AddRecipeComponent(false);
    }

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center backdrop-blur-md z-10">

                <motion.form initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="bg-orange-100 w-11/12 sm:w-2/3 px-7 pt-4 pb-6 mt-16 rounded-xl h-max relative">

                    <div id="cancel">
                        <i className="fa-solid fa-circle-xmark text-red-500 text-3xl cursor-pointer absolute -right-2 -top-3" onClick={closeFormPopup}></i>
                    </div>

                    <div className="mt-2 max-sm:text-sm">
                        <div id="title" className="mb-2">
                            <label htmlFor="recipe-title">Enter Recipe Name</label><br />
                            <input type="text" value={""} name="recipe-title" placeholder="Enter the Recipe Name here" className="mt-1 px-3 py-2 w-full rounded-md border-yellow-400 border-2" required />
                        </div>

                        <div className="flex flex-col gap-3 items-start xl:flex-row xl:gap-10 xl:items-center justify-start mb-2">
                            <div id="date">
                                <label htmlFor="date">Date of Enlistment : </label>
                                <input type="text" name="recipe-enlist-date" value={`${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`} className="ml-3 px-3 py-2 w-1/2 rounded-md border-yellow-400 border-2" disabled />
                            </div>

                            <div id="category">
                                <label htmlFor="category">Specify the category : </label>
                                <input type="radio" name="category" className="ml-3 size-5"/>
                                <label htmlFor="veg" className="ml-1">Veg</label>
                                <input type="radio" name="category" className="ml-3 size-5"/>
                                <label htmlFor="non-veg" className="ml-1">Non-Veg</label>
                            </div>
                        </div>

                        <div id="ingrediants" className="mb-2">
                            <label htmlFor="ingredients">Specify The ingredients</label><br />
                            <input type="text" name="ingredients"  className="mt-1 px-3 py-2 w-full rounded-md border-yellow-400 border-2" required/>
                        </div>

                        <div id="description">
                            <label htmlFor="description">Procedural Description</label><br />
                            <textarea name="description" className="w-full h-44 mt-1 p-3 rounded-md border-yellow-400 border-2" placeholder="Enter the procedure"></textarea>
                        </div>

                        <div id="action-buttons" className="mt-1 flex flex-row gap-8">
                            <button type="submit" className="bg-yellow-400 px-3 py-2 rounded-lg">Submit</button>
                            <button type="reset" className="bg-blue-200 px-3 py-2 rounded-lg">Reset</button>
                        </div>

                    </div>
                </motion.form>

            </motion.div>
        </AnimatePresence>
    )
}