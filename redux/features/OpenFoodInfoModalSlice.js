const { createSlice } = require("@reduxjs/toolkit");

const OpenfoodInFoModalSlice = createSlice(

    {
        name:"openFoodInfoModal",
        initialState:{
            isOpen:false,
            foodId:"",
            catId:"",
            resId:""
        },
        reducers:{
            setOpenFoodInfoModal:(state,action)=>{
                
                // console.log(action.payload,"action.payload")
                state.foodId= action.payload.foodId,
                state.catId= action.payload.catId,
                state.resId= action.payload.resId,
                // console.log(state.catId,"state")
                state.isOpen=true
                },
                setCloseFoodInfoModal:(state,action)=>{
                    state.isOpen=false
                    
                    },
                },
    }
)
export default OpenfoodInFoModalSlice.reducer;
export const {setOpenFoodInfoModal,setCloseFoodInfoModal} = OpenfoodInFoModalSlice.actions;