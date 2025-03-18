import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice"

export const myStore = configureStore({
    reducer: {
        category: categoryReducer,
    }
})