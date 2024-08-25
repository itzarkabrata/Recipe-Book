import { motion, AnimatePresence } from "framer-motion"

type Props = {
    func1: (event: boolean) => void;
    dataobj : {
        recipe_id : number;
        title : string;
        description : string;
        ingredients : string[];
        image_url : string;
        category : string;
    };
}

export default function RecipePopup({ func1,dataobj }: Props) {

    const closeCardPopup = (): void => {
        func1(false);
    }

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center backdrop-blur-md text-darkShade z-10" onClick={closeCardPopup}>

                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex flex-col gap-3 w-4/5 lg:w-2/3 bg-orange-100 px-7 pt-4 pb-6 rounded-xl h-max mt-16">

                    <div id="back-btn" className="mb-2">
                        <i className="fa-solid fa-arrow-left text-2xl cursor-pointer" onClick={closeCardPopup}></i>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">

                        <div className="flex flex-col gap-4 w-full sm:w-3/5 md:w-1/2">
                            <div id="recipe-image-popup" className="w-full sm:w-11/12 rounded-xl shadow-slate-600 shadow-2xl">
                                <img src={dataobj.image_url} alt="recipe-image" className="h-auto rounded-xl" />
                            </div>
                            <div className="max-sm:w-full">
                                <div id="recipe-title-popup" className="text-xl sm:text-3xl font-semibold mb-1">
                                    {dataobj.title}
                                </div>
                                <div id="recipe-ingredients-popup" className="max-sm:text-sm max-sm:h-10 max-sm:overflow-x-hidden max-sm:overflow-y-auto flex flex-row flex-wrap">
                                    {dataobj.ingredients.map((i:string)=>{
                                        return <span className="bg-yellow-500 p-1 m-1 rounded-lg" key={i}>{i} </span>
                                    })}
                                </div>
                            </div>
                        </div>

                        <div id="recipe-description-popup" className="w-full sm:w-2/5 md:w-1/2">
                            <div className="text-lg sm:text-2xl font-semibold sm:-mt-7">Description</div>
                            <div className="overflow-x-hidden overflow-y-auto mt-1 h-40 sm:h-96 sm:mt-3 pe-3 max-md:text-sm box-content">
                                {dataobj.description}
                            </div>
                        </div>
                    </div>

                </motion.div>

            </motion.div>
        </AnimatePresence>
    )
}