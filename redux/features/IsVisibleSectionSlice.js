const { createSlice } = require("@reduxjs/toolkit");

const IsVisibleSectionSlice = createSlice(
    {
        name:"isVisibleSection",
        initialState:1,
        reducers:{
            setIsVisibleSection:(state,action)=>{
                return action.payload;
                },
                },
    }
)
export default IsVisibleSectionSlice.reducer;
export const { setIsVisibleSection } = IsVisibleSectionSlice.actions;