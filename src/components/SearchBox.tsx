import { useEffect, useState } from "react";
// import Data from "../assets/sample_data/recipe.json";
import UserRecipeData from "../assets/sample_data/user_recipe.json";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addRecipeData } from "../redux_slices/recipe_data_slice/recipe_data";
import { RootState } from "../redux_store/store";
import axios from "axios";


interface PropsType {
    searchShow: boolean;
    handleScrolltoDiv: (data: string | null) => void;
    // onsubmit : (data:string)=>void
}

interface RecipeDataType {
    recipe_id?: number;
    title: string;
    description?: string;
    ingredients?: string[];
    image_url?: string;
    category?: string;
    user_id?:number;
    date_of_enlist?:string;
}


interface DB_Status{
    status : number;
    msg : string;
}


interface getresDataType {
    database_connectivity_status : DB_Status;
    recipes : [RecipeDataType];
}


const SearchBox = ({ searchShow, handleScrolltoDiv }: PropsType) => {

    const all_recipe_datas: RecipeDataType[] = useSelector((state: RootState) => state.recipes.recipes);

    const dispatch = useDispatch();

    const [formData, setFormData] = useState<string>("");
    const [isshow, setisshow] = useState<boolean>(false);
    const [SeachListData, setSeachListData] = useState<RecipeDataType[]>([]);


    // submit when user press enter
    const handleSubmit_OnEnterKey = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setFormData("");
        handleScrolltoDiv(formData);
    }


    // submit when user taps on a item in list
    const handleSubmit_OnSelectItem = (title: string) => {
        console.log(title);
        setFormData("");
        handleScrolltoDiv(title);
    }



    // used for filtering list data based on current search
    useEffect(() => {

        // Data.recipes will be stored on Redux
        let filterSeachList = all_recipe_datas?.filter((item: RecipeDataType) => {
            return item.title?.toLowerCase().includes(formData.toLowerCase());
        })

        setSeachListData(filterSeachList);

    }, [formData])




    // used for fetching data for search engine list from Database whenever seach dropdown is open
    useEffect(() => {
        //will do the fetch call of getting recipe titles from database if only a dropdown is open
        async function getData() {
            if (isshow) {

                if (window.location.pathname === "/") {
                    console.log("hi");
                    // fetch call here...
                    let res_data = await axios.get("https://recipe-book-backend-production.up.railway.app/get_recipes.php");

                    let data:getresDataType = await res_data.data;
    
                    // will fetch all datas(title,image) from database
                    dispatch(addRecipeData(data.recipes));
                    setSeachListData(data.recipes);
    
                } else {
    
                    // fetch call here...
    
                    // will fetch only the recipes(title,image) that the user added
                    dispatch(addRecipeData(UserRecipeData.recipes));
                    setSeachListData(UserRecipeData.recipes);
                }
    
            }
        }
        getData().then(()=>{
            console.log("Hello")
        }).catch((err)=>{
            alert(err);
        });

    }, [isshow])


    return (
        <>
            {isshow && document.getElementById("home-initial-bg")?.addEventListener("click", () => setisshow(false))}
            {isshow && document.getElementById("recipe-page-initial-bg")?.addEventListener("click", () => setisshow(false))}


            <AnimatePresence>
                <form className={`${searchShow ? "z-30" : "hidden z-20"} mt-8 absolute left-[10%] md:left-[20%] w-4/5 md:w-3/5 py-10 flex flex-col justify-center items-center overflow-hidden`} onSubmit={handleSubmit_OnEnterKey}>


                    <input className={`w-full focus:outline-none p-3 px-8 ${isshow ? " rounded-t-3xl" : "rounded-full"} shadow-[0_2px_20px_rgba(0,0,0,0.2)]`} type="text" name="searchdata" value={formData} onChange={(e) => setFormData(e.target.value)} placeholder="Search for recipes..." onFocus={() => setisshow(true)} />


                {isshow && <motion.ul initial={{opacity:0,height : "0rem"}} animate={{opacity:1,height : "16rem"}} exit={{opacity:0}} className="bg-white h-64 w-full overflow-x-hidden overflow-y-scroll rounded-b-3xl no-scrollbar">
                        {SeachListData?.map((item:RecipeDataType)=>{
                            return <li key={item.recipe_id} className="py-4 px-6 border border-b-yellow-400 hover:bg-yellow-100 hover:cursor-pointer flex flex-row justify-start items-center gap-4" onClick={()=>{
                                handleSubmit_OnSelectItem(item.title);
                            }}>
                                <img src={item.image_url} alt="rexipe-image" width={"50px"} className="rounded-md" />
                                <p>{item.title}</p>
                            </li>
                        })}
                    </motion.ul>}


                </form>
            </AnimatePresence>


        </>
    )
}

export default SearchBox
