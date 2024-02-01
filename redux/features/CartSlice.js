const { createSlice } = require("@reduxjs/toolkit");

const CartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    }
    , reducers:{
        addToCart:(state,action)=>{
            let isExist= state.cart.find(item=> item.id=== action.payload.id)
            if (isExist){
                isExist.count += 1;
                }else{
                    state.cart.push({...action.payload,count:1})
                }
    }
    ,decreaseItem:(state,action)=>{
        let index= state.cart.findIndex((item)=>item.id === action.payload.id);
          state.cart[index].count -=1 ;
          if(state.cart[index].count===0){
             state.cart.splice(index,1)
          }
       
    },
    
       
  
//     ,removeFromCart : (state,action)=> {
//         let index = state.cart.findIndex((item)=>(item.id === action.payload))
        
//        return state.cart.filter((_,i)=> i !==index )
//    },
    clearCart:()=>({cart: []}),
   
}  
}  
)


export default CartSlice.reducer;
export const { addToCart , decreaseItem ,clearCart  } = CartSlice.actions;





// name:"cart",
// initialState:{
//     cart:localStorage.getItem("cart") ? JSON.parse(localStorage.get
//         .getItem("cart")) : [],  // [] - если локальное хранилище нет, то создаем пустой массив
//     totalAmount:0,
//     totalCost:0
// },
// reducers:{
//     addToCart:(state,action)=>{
//         let item={...action.payload};
//         item.amount=1;
//         state.cart.push(item);
//         localStorage.setItem('cart',JSON.stringify(state.cart));//записываем в локал сторадж
//         this.value=state;//обновляем состояние с помощью this.value
//     },
//     removeFromCart:(state, action) =>{
//         let index = state.cart.findIndex((i) => i.id === action.payload);
//         if (index !== -1){
//             state.cart.splice(index, 1);
//         }
//         localStorage.setItem('cart', JSON.stringify(state.cart))
//     },
//     increaseByOne:(state, action)=> {
//         let index = state.cart.indexOf(action.payload)
//         let newItem = { ...state.cart[index] };
//         newItem.amount++;
//         state.cart=[...state.cart.slice(0,index),newItem,...state.cart.slice(index+1)];
//     },
//     decreaseByOne:(state, action)=>{
//         let index = state.cart.indexOf(action.payload)
//         let newItem = { ...state.cart [index] }
//         newItem.amount--
//         if(!newItem.amount) {
//             state.cart = [...state.cart.slice(0,index), ...state.cart.slice(index + 1)]
//         } else {
//             state.cart = [...state.cart.slice(0,index+1),newItem, ...state.cart.slice(index+1)]
//         }
//     },
//     clearCart:(state)=> {
//        state.cart=[]
//        localStorage.removeItem('cart')
//    }
// },
// effects:{
//   loadCart:(dispatch)=>{
//       setTimeout(()=>{
//           let cartItems =localStorage.getItem("cart")
//           if(cartItems==null) return dispatch({type:"emptyCart"})
//           dispatch({type:'addCart', payload:JSON.parse(cartItems)})
//       },500)
//   }
// }