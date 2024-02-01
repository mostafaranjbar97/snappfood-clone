const { createSlice } = require("@reduxjs/toolkit");

const categorySelectedSlice = createSlice(
    {
        name:"categrySelected",
        initialState:1,
        reducers:{
            setSelectCategory:(state,action)=>{
                return action.payload;
                },
                },
    }
)
export default categorySelectedSlice.reducer;
export const { setSelectCategory } = categorySelectedSlice.actions;