import { createSlice } from "@reduxjs/toolkit";
var CartSlice=createSlice(
        {
            name:"cart",
            initialState:{
                cartitems:[],
                newcart:[]
            },
            reducers:{
                addtocart:(state,action)=>
                {
                    var ind=state.cartitems.findIndex((obj)=>
                        (obj.id==action.payload.id&&obj.username==action.payload.username)
                    )
                    if(ind==-1)
                    {
                        state.cartitems.push(action.payload)
                    }
                    else{
                        state.cartitems[ind].quantity++;
                    }
                   state.newcart=state.cartitems.filter((obj)=>obj.username==action.payload.username)

                },
                removefromcart:(state,action)=>
                {
                    var ind=state.cartitems.findIndex((obj)=>
                        (obj.id==action.payload.id&&obj.username==action.payload.username)
                    )
                    state.cartitems.splice(ind,1);

                },
                getCartbyusername:(state,action)=>
                {
                    state.newcart=state.cartitems.filter((obj)=>obj.username==action.payload)
                
                    

                }
            }
        }
)
export const{addtocart,removefromcart,getCartbyusername}=CartSlice.actions
export default CartSlice.reducer