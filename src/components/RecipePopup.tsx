import { motion, AnimatePresence } from "framer-motion"

type Props = {
    func1: (event: boolean) => void
}

export default function RecipePopup({ func1 }: Props) {

    const closeCardPopup = (): void => {
        func1(false);
    }

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center backdrop-blur-md z-10" onClick={closeCardPopup}>

                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex flex-col gap-3 w-4/5 lg:w-2/3 bg-orange-100 px-7 pt-4 pb-6 rounded-xl h-max mt-16">

                    <div id="back-btn" className="mb-2">
                        <i className="fa-solid fa-arrow-left text-2xl cursor-pointer" onClick={closeCardPopup}></i>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">

                        <div className="flex flex-col gap-4 w-full sm:w-3/5 md:w-1/2">
                            <div id="recipe-image-popup" className="w-full sm:w-11/12 rounded-xl shadow-slate-600 shadow-2xl">
                                <img src="https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg" alt="recipe-image" className="h-auto rounded-xl" />
                            </div>
                            <div className="max-sm:w-full">
                                <div id="recipe-title-popup" className="text-xl sm:text-3xl font-semibold mb-1">
                                    Chicken Resala with white souce
                                </div>
                                <div id="recipe-ingredients-popup" className="max-sm:text-sm max-sm:h-10 max-sm:overflow-x-hidden max-sm:overflow-y-auto ">
                                    Maida Bally Coconut Maida Bally Coconut Maida Bally Coconut Maida Bally Coconut Maida Bally Coconut Maida
                                </div>
                            </div>
                        </div>

                        <div id="recipe-description-popup" className="w-full sm:w-2/5 md:w-1/2">
                            <div className="text-lg sm:text-2xl font-semibold sm:-mt-7">Description</div>
                            <div className="overflow-x-hidden overflow-y-auto mt-1 h-40 sm:h-96 sm:mt-3 pe-3 max-md:text-sm box-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum, voluptatibus tempora enim suscipit necessitatibus explicabo nemo in provident error deleniti delectus eligendi culpa hic facere voluptates cum ullam ducimus alias iste placeat a rerum. Dolorum, adipisci vero eveniet nihil incidunt corporis distinctio minima illo nesciunt! Tempora nulla minus saepe deserunt. Ratione deserunt eum sequi, ullam id quos repellendus facere, laboriosam at in vel deleniti ex! Rem repellat error, ab architecto ratione, expedita sed iste itaque necessitatibus ipsam cum delectus quibusdam laudantium quaerat unde reprehenderit ea beatae, recusandae vitae consectetur? Beatae, assumenda. Autem mollitia sint ex. Quos earum sed recusandae consectetur ad asperiores eligendi modi. Quam assumenda, ullam qui placeat nisi odit rem dolor pariatur quas non provident, recusandae enim cumque sunt deleniti nulla commodi sequi perferendis vero quia veniam porro ipsum sed temporibus! Sequi id, quaerat magni error officiis cumque ullam est rem esse nesciunt consequuntur hic, nemo molestias ratione perspiciatis voluptatum eligendi sit deleniti assumenda dolores aut, tenetur earum? Quidem ducimus obcaecati sint beatae praesentium minima earum fugit animi veniam minus eius, dolores repellat ea ipsam ex voluptate. Modi rem consectetur cupiditate ex harum? Sapiente consequatur, sunt blanditiis officia tenetur, iusto quis consequuntur earum mollitia molestias nulla quo? Repudiandae temporibus nam aliquid numquam, delectus vel explicabo. Dolorem laborum facere doloremque ratione explicabo dolores perspiciatis quasi velit? Explicabo, debitis! Voluptas voluptatem corrupti sed reprehenderit temporibus perferendis beatae vel aperiam dolor illum doloremque aut quaerat distinctio nam esse laboriosam accusantium, quis dolore in ut sint est ducimus maxime odit? Obcaecati dolor, non molestiae nulla commodi nesciunt eius tenetur perferendis incidunt voluptas culpa explicabo soluta rem magnam cumque consequatur fugiat illo labore optio harum, cupiditate praesentium? Iure, adipisci sequi quis quia recusandae nesciunt assumenda totam similique quibusdam iste ipsum quam sint. Quisquam saepe alias velit laboriosam id eaque fugiat amet. Libero iste corrupti officiis! Laboriosam eius labore tempore ut ea tempora ipsa aliquid facilis explicabo dolor assumenda, praesentium quam possimus voluptate vitae, exercitationem expedita asperiores quos dolore porro architecto aliquam, quibusdam quae consequatur? Beatae corrupti harum temporibus rerum, repellat enim praesentium ex exercitationem aspernatur dolorum autem, facere necessitatibus pariatur neque voluptas id maxime voluptatem, deserunt fugiat perferendis. Eligendi rem id ipsum architecto voluptatem veritatis facilis illo nulla laudantium dolores harum vero accusamus, modi ea amet repellat error illum eum, ab quis aspernatur ipsa inventore! Ipsum esse deserunt accusamus. Tenetur incidunt corrupti vel accusamus, dolor placeat dolorum error! Nesciunt quis natus nemo.
                            </div>
                        </div>
                    </div>

                </motion.div>

            </motion.div>
        </AnimatePresence>
    )
}