import Home_img from "../assets/images/home_img.jpg"
import RecipeCards from "../components/RecipeCards";
import SearchBox from "../components/SearchBox";

interface PropsType{
  searchButton:boolean
}

const Home = ({searchButton}:PropsType) => {
  return (
    <div className="">
      <SearchBox searchShow={searchButton}/>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
        style={{ backgroundImage: `url(${Home_img})`, height: '600px' }}>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
            </div>
          </div>
        </div>
      </div>

      <div id="recipe-list" className="grid justify-center items-end grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-10 md:px-14 xl:px-20 py-10">
        <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"}/>
        <RecipeCards recipe_title={"Reshmi Kabab"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
        <RecipeCards recipe_title={"Chilli potato with red souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
        <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
        <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
        <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"}/>
        <RecipeCards recipe_title={"Reshmi Kabab"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
        <RecipeCards recipe_title={"Chilli potato with red souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
        <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
        <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
      </div>
    </div>
  )
}

export default Home
