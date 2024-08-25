import { useEffect, useState } from "react";
import Data from "../assets/sample_data/recipe.json";
import { AnimatePresence,motion } from "framer-motion";

interface PropsType {
    searchShow : boolean;
    handleScrolltoDiv : ()=>void;
    // onsubmit : (data:string)=>void
}

interface RecipeDataType {
  recipe_id?: number;
  title: string;
  description?: string;
  ingredients?: string[];
  image_url?: string;
  category?: string;
}

const SearchBox = ({searchShow,handleScrolltoDiv}:PropsType) => {


    const [formData,setFormData] = useState<string>("");
    const [isshow,setisshow] = useState<boolean>(false);
    const [SeachListData,setSeachListData] = useState<RecipeDataType[]>([]);
    

    // submit when user press enter
    const handleSubmit_OnEnterKey=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formData);
        setFormData("");
        handleScrolltoDiv()        
    }


    // submit when user taps on a item in list
    const handleSubmit_OnSelectItem = (title:string)=>{
        console.log(title);
        setFormData("");
        handleScrolltoDiv();
    }



    // used for filtering list data based on current search
    useEffect(()=>{

        let filterSeachList = Data.recipes.filter((item:RecipeDataType)=>{
            return item.title?.includes(formData);
        })

        setSeachListData(filterSeachList);

    },[formData])




    // used for fetching data for search engine list from Database whenever seach dropdown is open
    useEffect(() => {
        //will do the fetch call of getting recipe titles from database

        setSeachListData(Data.recipes);
    
    }, [isshow])
    

    return (
        <>
        {isshow && document.getElementById("home-initial-bg")?.addEventListener("click",()=>setisshow(false))}
        {isshow && document.getElementById("recipe-page-initial-bg")?.addEventListener("click",()=>setisshow(false))}


        <AnimatePresence>
            <form className={`${searchShow?"z-30":"hidden z-20"} mt-8 absolute left-[10%] md:left-[20%] w-4/5 md:w-3/5 py-10 flex flex-col justify-center items-center overflow-hidden`} onSubmit={handleSubmit_OnEnterKey}>


                <input className={`w-full focus:outline-none p-3 px-8 ${isshow ? " rounded-t-3xl":"rounded-full"} shadow-[0_2px_20px_rgba(0,0,0,0.2)]`} type="text" name="searchdata" value={formData} onChange={(e)=>setFormData(e.target.value)} placeholder="Search for recipes..." onFocus={()=>setisshow(true)} />


                {isshow && <motion.ul initial={{opacity:0,height : "0rem"}} animate={{opacity:1,height : "16rem"}} exit={{opacity:0}} className="bg-white h-64 w-full overflow-x-hidden overflow-y-auto rounded-bl-3xl rounded-br-none">
                        {SeachListData.map((item:RecipeDataType)=>{
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
