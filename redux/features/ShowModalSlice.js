const { createSlice } = require("@reduxjs/toolkit");

const ShowModalSlice = createSlice(

    {
        name:"showModal",
        initialState:{
            isOpenOrder:false,
            isOpenSupport:false,
            isOpenOrderInvoiceModal:false,
            isOpenOrderCommentModal:false
        },
        reducers:{
            setShowSupportModal:(state,action)=>{
                state.isOpenSupport=true
                },
            setHideSupportModal:(state,action)=>{
                state.isOpenSupport=false
                },
            setShowOrderModal:(state,action)=>{
                state.isOpenOrder=true
                },
            setHideOrderModal:(state,action)=>{
                state.isOpenOrder=false
                },
            setShowInvoiceModal:(state,action)=>{
                state.isOpenOrderInvoiceModal=true
                },
            setHideInvoiceModal:(state,action)=>{
                state.isOpenOrderInvoiceModal=false
                },
            setShowCommentModal:(state,action)=>{
                state.isOpenOrderCommentModal=true
                },
            setHideCommentModal:(state,action)=>{
                state.isOpenOrderCommentModal=false
                },
            },
    }
)
export default ShowModalSlice.reducer;
export const {setShowSupportModal,setHideSupportModal,setShowOrderModal,setHideOrderModal,setShowInvoiceModal,setHideInvoiceModal,setShowCommentModal,setHideCommentModal} = ShowModalSlice.actions;