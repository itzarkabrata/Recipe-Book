import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface RecipeDataType {
    recipe_id?: number;
    title: string;
    description?: string;
    ingredients?: string[];
    image_url: string;
    category?: string;
} 


export interface AllRecipeContainer {
    recipes: RecipeDataType[]
}

const initialRecipeData:AllRecipeContainer = {
    recipes: [],
}

export const recipe_data_slice = createSlice({
    name : "recipes",
    initialState : initialRecipeData,
    reducers: {
        addRecipeData : (state,action : PayloadAction<RecipeDataType[]>) => {
            state.recipes = action.payload
        },
    }
})

export const {addRecipeData} = recipe_data_slice.actions;

export default recipe_data_slice.reducer;