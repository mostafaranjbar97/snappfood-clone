const { createSlice } = require("@reduxjs/toolkit");

const OpenResInfoModalSlice = createSlice(

    {
        name:"openResInfoModalNumber",
        initialState:{
            isOpen:false,
            isOpenNumber:""
        },
        reducers:{
            setOpenResInfoModalNumber:(state,action)=>{
                state.isOpen=true,
                state.isOpenNumber= action.payload
                },
                setCloseResInfoModalNumber:(state,action)=>{
                    state.isOpen=false,
                    state.isOpenNumber= action.payload
                    },
                },
    }
)
export default OpenResInfoModalSlice.reducer;
export const {setOpenResInfoModalNumber,setCloseResInfoModalNumber} = OpenResInfoModalSlice.actions;