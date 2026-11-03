import { createSlice } from "@reduxjs/toolkit";
import Wishlist from "./User/Wishlist";
var WishListSlice=createSlice(
        {
            name:"wishlist",
            initialState:{
                wishlistitems:[],
                mywishlist:[]
            },
            reducers:{
                addtowishlist:(state,action)=>
                {
                    var ind=state.wishlistitems.findIndex((obj)=>
                        (obj.id==action.payload.id&&obj.username==action.payload.username)
                    )
                    if(ind==-1)
                    {
                        state.wishlistitems.push(action.payload)
                    }
                    else{
                        state.wishlistitems[ind].quantity++;
                    }
                     state.mywishlist=state.wishlistitems.filter((obj)=>obj.username==action.payload.username)
                
                },
                removefromwishlist:(state,action)=>
                {
                    var ind=state.wishlistitems.findIndex((obj)=>
                        (obj.id==action.payload.id&&obj.username==action.payload.username)
                    )
                    state.wishlistitems.splice(ind,1);

                },
                getWlistbyusername:(state,action)=>
                {
                    state.mywishlist=state.wishlistitems.filter((obj)=>obj.username==action.payload)
                }
            }
        }
        
)
export const{addtowishlist,removefromwishlist,getWlistbyusername}=WishListSlice.actions
export default WishListSlice.reducer