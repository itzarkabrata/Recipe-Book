import { useState, useEffect } from "react";
import Home_img from "../assets/images/home_img.jpg"
import RecipeCards from "../components/RecipeCards";
import SearchBox from "../components/SearchBox";
import { Link } from 'react-router-dom'

interface PropsType {
  searchButton: boolean
}

const Home = ({ searchButton }: PropsType) => {

  const [isVisible, setisVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setisVisible(true)
    }, 100)

    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="">
      <SearchBox searchShow={searchButton ? true : false} />
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
        style={{ backgroundImage: `url(${Home_img})`, height: '600px' }}>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-gradient-overlay-1"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className=" h-full flex flex-col justify-center items-center text-white gap-10">

            <span className={`mb-4 px-2 max-sm:text-3xl max-md:text-4xl text-5xl font-semibold transition-opacity ease-in duration-[1500ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>Discover Delicious Recipes for Every Occasion</span>
            <a href="#all_recipe">
              <button className={`flex flex-row items-center rounded-lg hover:bg-slate-200 hover:bg-opacity-10 gap-2 border-solid border-[3px] py-3 px-6 transition-opacity ease-in duration-[1500ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <span className="text-sm sm:text-lg">Explore Now</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div id="all_recipe" className="bg-gradient-overlay-2 flex flex-col text-white pt-16">
        <div className="flex items-center justify-start py-10 px-8 max-sm:px-4 ">
          <div className="text-lg max-sm:text-sm border-solid border-[2px] px-5 py-3 rounded-full">10 recipes found</div>
        </div>
        <div id="recipe-list" className="grid justify-center items-end grid-cols-1 md:grid-cols-2 gap-16 px-5 sm:px-10 md:px-14 xl:px-20 py-10">
          <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
          <RecipeCards recipe_title={"Reshmi Kabab"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
          <RecipeCards recipe_title={"Chilli potato with red souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
          <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
          <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
          <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
          <RecipeCards recipe_title={"Reshmi Kabab"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
          <RecipeCards recipe_title={"Chilli potato with red souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
          <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
          <RecipeCards recipe_title={"Chicken Curry with white souce"} recipe_img={"https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"} />
        </div>
      </div>
    </div>
  )
}

export default Home
