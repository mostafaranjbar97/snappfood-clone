import { configureStore } from "@reduxjs/toolkit";
import CategorySelectedSlice from "./features/CategorySelectedSlice";


export const store = configureStore(
    {
        reducer:{
            categorySelected: CategorySelectedSlice,
        }
    }
)