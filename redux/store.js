import { configureStore } from "@reduxjs/toolkit";
import CategorySelectedSlice from "./features/CategorySelectedSlice";
import IsVisibleSectionSlice from "./features/IsVisibleSectionSlice";
import OpenResInfoModalSlice from "./features/OpenResInfoModalSlice";
import OpenFoodInfoModalSlice from "./features/OpenFoodInfoModalSlice";


export const store = configureStore(
    {
        reducer:{
            categorySelected: CategorySelectedSlice,
            isVisibleSection: IsVisibleSectionSlice,
            openResInfoModalNumber: OpenResInfoModalSlice,
            openFoodInfoModal: OpenFoodInfoModalSlice,
        }
    }
)