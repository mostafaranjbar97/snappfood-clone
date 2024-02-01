const { createSlice } = require("@reduxjs/toolkit");

const ShowFoodPartyInfoModalSlice = createSlice(

    {
        name:"showFoodPartyInfoModal",
        initialState:{
            isOpen:false,
            foodId:"",
            resId:""
        },
        reducers:{
            setOpenFoodPartyInfoModal:(state,action)=>{
                
                // console.log(action.payload,"action.payload")
                state.foodId= action.payload.foodId,
                state.resId= action.payload.resId,
                // console.log(state.catId,"state")
                state.isOpen=true
                },
                setCloseFoodPartyInfoModal:(state,action)=>{
                    state.isOpen=false
                    
                    },
                },
    }
)
export default ShowFoodPartyInfoModalSlice.reducer;
export const {setOpenFoodPartyInfoModal,setCloseFoodPartyInfoModal} = ShowFoodPartyInfoModalSlice.actions;