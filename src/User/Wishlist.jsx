import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getWlistbyusername } from "../WishListSlice";

export function Wishlist()
{
    var dispatch=useDispatch()
    var wishlistitems=useSelector((state)=>state.wishlist.mywishlist)
    useEffect(()=>
    {
        var username=localStorage.getItem("isUserIn");
        dispatch(getWlistbyusername(username))
    },[dispatch])
    return(
        <>

         <h1>Wishlist</h1>
        <div className="row">
            {
                wishlistitems.map((item,ind)=>(
                    
                    <div className="col-md-4" key={ind}>
                        <div className="card">
                            <div className="card-header">
                                <img src={item.image} className="card-img "></img>
                                <h1>{item.name}</h1>
                            </div>
                            <div className="card-body">
                            <p>{item.description}</p>
                            <p>{item.price}/-rs</p>
                            </div>
                            </div>
                    </div>
                    

                ))
            }
        </div>

        </>
    )
}
export default Wishlist;