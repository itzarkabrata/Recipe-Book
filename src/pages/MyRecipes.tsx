import AddRecipeButton from "../components/AddRecipeButton";
import RecipeCards from "../components/RecipeCards";
import Data from "../assets/sample_data/recipe.json";

type Props = {}

interface RecipeDatatype {
  recipe_id : number;
  title : string;
  description : string;
  ingredients : string[];
  image_url : string;
  category : string;
}

function MyRecipes({}: Props) {
  return (
    <div>
      <div id="recipe-list" className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-10 md:px-14 xl:px-20 py-10">
        {Data.recipes.map((item:RecipeDatatype)=>{
          return <div key={item.recipe_id}><RecipeCards dataobj={item}/></div>
        })}
      </div>
      <div className="fixed bottom-16 right-10">
        <AddRecipeButton/>
      </div>
    </div>
  )
}

export default MyRecipes;