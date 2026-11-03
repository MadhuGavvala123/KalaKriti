import { createSlice } from "@reduxjs/toolkit";
var OrderSlice=createSlice(
    {
        name:'orders',
        initialState:
        {
            orderslist:[],
            myorders:[]
        },
        reducers:
        {
            addtoorders:(state,action)=>
            {
                state.orderslist.push(action.payload);
                state.myorders=state.orderslist.filter((obj)=>obj.username==action.payload.username)
            },
            getOrdersbyusername:(state,action)=>
            {
                state.myorders=state.orderslist.filter((obj)=>obj.username==action.payload)
            }
        }
    }
)
export const{addtoorders,getOrdersbyusername}=OrderSlice.actions;
export default OrderSlice.reducer;