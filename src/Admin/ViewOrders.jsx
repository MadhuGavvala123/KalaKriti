import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getCartbyusername } from "../CartSlice";
import { addtoorders } from "../OrderSlice";

export function ViewOrders()
{


    var dispatch=useDispatch()
    var orderslist=useSelector((state)=>state.order.orderslist)
    // useEffect(()=>
    // {
    //     var username=localStorage.getItem("isUserIn");
    //     dispatch(getCartbyusername(username))
    // },[dispatch])



    var [allorders,setAllorders]=useState(null)
    // var [phone,setPhone]=useState("");
    // var [address,setAddress]=useState("");
    // function receivedata(obj)
    // {
    //     setDummy(obj)
    // }
    // function placeOrder(){
    //     var orderobj={
    //         ...dummy,
    //         username:localStorage.getItem("isUserIn"),
    //         userPhone:phone,
    //         userAddress:address
    //     }
    //     console.log(orderobj);
    //     dispatch(addtoorders(orderobj))
    //     alert("Order Placed Succesfully!");
    // }
    


    return(
        <>
        <table className="table table-border">
            <thead>
                <tr>
                    <th>Sl No</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    orderslist&&orderslist.map((c,ind)=>
                    (
                        <tr key={ind}>
                    <td>{ind+1}</td>
                    <td>{c.name}</td>
                    <td>{c.price}</td>
                    <td><img src={c.image} height={100} width={100}></img></td>
                    <td>{c.quantity}</td>
                </tr>
                    ))
                }
                
            </tbody>
        </table>


        
        </>
    )
}
export default ViewOrders;