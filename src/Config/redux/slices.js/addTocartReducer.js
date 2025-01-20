import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const CartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
    addProduct:(state,action)=>{
        
        if(state.value.length===0){
           alert("product successfully added")
            state.value.push(action.payload);
        }else{
            let found=false;
            for(let i=0;i<state.value.length;i++){
                if(state.value[i].id===action.payload.id){
                    found=true;
                    break;
                }
               
            }
            if(found===false){
                alert("product successfully added")
                state.value.push(action.payload);
            }else{
               alert("alredy have product in the cart")
            }
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProduct } = CartSlice.actions

export default CartSlice.reducer