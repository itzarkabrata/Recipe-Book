import { configureStore } from "@reduxjs/toolkit";
import addRecipeDataReducer from "../redux_slices/recipe_data_slice/recipe_data";

export const store = configureStore({
    reducer : {
        recipes : addRecipeDataReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;