import { useState, useEffect, useRef } from "react";
import Recipe_img from "../assets/images/my_recipe.jpg"
import RecipeCards from "../components/RecipeCards";
import SearchBox from "../components/SearchBox";
import AddRecipeButton from "../components/AddRecipeButton";
import axios from "axios";

interface PropsType {
  searchButton: boolean
}

interface RecipeDataType {
  recipe_id?: number;
  title: string;
  description?: string;
  ingredients: string;
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


function MyRecipes({ searchButton }: PropsType) {


  const targetDiv = useRef<HTMLDivElement | null>(null)
  const [isVisible, setisVisible] = useState<boolean>(false)
  const [headerVisible, setheaderVisible] = useState<boolean>(false)
  const [divVisible, setdivVisible] = useState<boolean>(false)
  const [getRecipeData_ForMyRecipePage, setgetRecipeData_ForMyRecipePage] = useState<RecipeDataType[]>([]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setisVisible(true)
    }, 100)

    return () => clearTimeout(timer);
  }, [])

  const handleScrolltoDiv = async(data: string | null) => {

    try {
      //if null is passed i.e user just presses on EXPLORE NOW then all recipes from database are fetched
      if (data === null) {

        let val = await axios.get("https://recipe-book-backend-production.up.railway.app/get_recipes.php?user_id=2");

        let res:getresDataType = await val.data;

        // api call from database for getting all recipes that are added by that user

        setgetRecipeData_ForMyRecipePage(res.recipes);

      }
      //else if a title is passed then all recipes that matches the title will be fetched
      else {

        let val = await axios.get("https://recipe-book-backend-production.up.railway.app/get_recipes.php");

        let res:getresDataType = await val.data;

        // api call from database for getting specific recipies of the user that matches "data" 

        setgetRecipeData_ForMyRecipePage(res.recipes);

      }


      setdivVisible(true)
      setTimeout(() => {
        if (targetDiv.current) {
          targetDiv.current.scrollIntoView({ behavior: "smooth" })
          setTimeout(() => { setheaderVisible(true) }, 80)
        }
      }, 200)
    } catch (error) {
      // redirect to error page
      console.log(error);
    }

  }
  return (
    <div className="">
      <SearchBox searchShow={searchButton ? true : false} handleScrolltoDiv={handleScrolltoDiv} />
      <div id="recipe-page-initial-bg"
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
        style={{ backgroundImage: `url(${Recipe_img})`, height: '100vh' }}>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-gradient-overlay-1"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className=" h-full flex flex-col justify-center items-center text-white gap-52">

            <span className={`mb-4 px-2 max-sm:text-3xl max-md:text-4xl text-5xl font-semibold transition-opacity ease-in duration-[1500ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>Explore New Flavors: Your Go-To Recipe Collection</span>

            <button onClick={() => handleScrolltoDiv(null)} className={`flex flex-row items-center rounded-lg hover:bg-slate-200 hover:bg-opacity-10 gap-2 border-solid border-[3px] py-3 px-6 transition-opacity ease-in duration-[1500ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <span className="text-sm sm:text-lg">Explore Now</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {divVisible ?
        <div ref={targetDiv} className={`bg-gradient-overlay-2 flex flex-col pt-24 transition-opacity ease-in duration-[800ms] ${headerVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className={`text-5xl max-sm:text-3xl font-semibold text-white text-center`}>My Recipes</h2>
          <div className="flex items-center justify-start py-10 px-8 max-sm:px-4 ">
            <div className="text-lg max-sm:text-sm border-solid text-white border-[2px] px-5 py-3 rounded-full">{getRecipeData_ForMyRecipePage.length} recipes found</div>
          </div>
          <div id="recipe-list" className="grid justify-center items-center grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-10 md:px-14 xl:px-20 py-10">
            {getRecipeData_ForMyRecipePage.map((item: RecipeDataType) => {
              return <div key={item.recipe_id}><RecipeCards dataobj={item} /></div>
            })}
          </div>
          <div className="fixed bottom-16 right-10">
            <AddRecipeButton />
          </div>
        </div> : <></>
      }
    </div>
  )
}

export default MyRecipes;