import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getCartbyusername } from "../CartSlice";
import { addtoorders } from "../OrderSlice";

export function Cart()
{


    var dispatch=useDispatch()
    var cartitems=useSelector((state)=>state.cart.newcart)
    useEffect(()=>
    {
        var username=localStorage.getItem("isUserIn");
        dispatch(getCartbyusername(username))
    },[dispatch])



    var [dummy,setDummy]=useState(null)
    var [phone,setPhone]=useState("");
    var [address,setAddress]=useState("");
    function receivedata(obj)
    {
        setDummy(obj)
    }
    function placeOrder(){
        var orderobj={
            ...dummy,
            username:localStorage.getItem("isUserIn"),
            userPhone:phone,
            userAddress:address
        }
        console.log(orderobj);
        dispatch(addtoorders(orderobj))
        alert("Order Placed Succesfully!");
    }
    function placeAll() {
    cartitems.forEach((c) => {
        var orderobj = {
            ...c,
            username: localStorage.getItem("isUserIn"),
            userPhone: phone,
            userAddress: address
        };

        dispatch(addtoorders(orderobj));
    });

    alert("All Orders Placed Successfully!");
}
  



    return(
        <>
        <table className="table table-border ">
            <thead>
                <tr>
                    <th>Sl No</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartitems&&cartitems.map((c,ind)=>
                    (
                        <tr key={ind}>
                    <td>{ind+1}</td>
                    <td>{c.name}</td>
                    <td>{c.price}</td>
                    <td><img src={c.image} height={100} width={100}></img></td>
                    <td>{c.quantity}</td>
                    <td>
                        <button className="btn btn-primary" data-bs-target="#ordermodal" data-bs-toggle="modal" onClick={()=>receivedata(c)}>Buy Now</button>
                        <button className="btn btn-danger">Remove</button>
                    </td>
                </tr>
                    ))
                }
                <tr>
    <td  className="text-end fw-bold">
        Total Orders: {cartitems.length}
    </td>

    <td colSpan="2" className="fw-bold">
        Total Price: ₹{cartitems.reduce((sum, c) => sum + c.price * c.quantity, 0)}
    </td>

    <td colSpan="5">
        <button className="btn btn-success" data-bs-target="#ordermodal2" data-bs-toggle="modal" onClick={()=>receivedata(c)} >
            Place All Orders
        </button>
    </td>
</tr>
                
            </tbody>
        </table>
       
        


        <div className="modal fade" id="ordermodal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h2>Your Order:{dummy&& dummy.name}</h2>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label className="form-label">
                            Phone:
                        </label>
                        <input type="text" onChange={(e)=>setPhone(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Address:
                        </label>
                        <input type="text" onChange={(e)=>setAddress(e.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={placeOrder} className="btn btn-primary" data-bs-dismiss="modal">Order Now</button>
                </div>
                </div>
            </div>
        </div>


                <div className="modal fade" id="ordermodal2">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h2>Your Order:{dummy&& dummy.name}</h2>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label className="form-label">
                            Phone:
                        </label>
                        <input type="text" onChange={(e)=>setPhone(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Address:
                        </label>
                        <input type="text" onChange={(e)=>setAddress(e.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={placeAll} className="btn btn-primary" data-bs-dismiss="modal">Order Now</button>
                </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Cart;