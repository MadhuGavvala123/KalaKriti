import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOne } from "../ProductSlice";
import { addtocart } from "../CartSlice";
import { addtowishlist } from "../WishListSlice";
export default function ProductDeatils()
{
    const dispatch=useDispatch();
    
    const {pid}=useParams();
    var reqproduct=null;
    reqproduct=useSelector((state)=>state.product.selectedProduct);
    useEffect(()=>
    {
        dispatch(getOne(pid))
    },[dispatch,pid]
    )
    var navigateTo=useNavigate()

    var handleCart=()=>
    {
        var obj={
            ...reqproduct,
            quantity:1,
            username:localStorage.getItem("isUserIn")
        }
        dispatch(addtocart(obj));
        
    }

    var handleWlist=()=>
    {
        var obj={
            ...reqproduct,
            quantity:1,
            username:localStorage.getItem("isUserIn")
        }
        dispatch(addtowishlist(obj));
        
    }
    return(
        <>
        
        {
            reqproduct&&(
                <div className="row">
                    <div className="col-md-4">
                        <img src={reqproduct.image} className="img-fluid "></img>
                    </div>
                    <div className="col-md-8">
                        <h2>{reqproduct.name}</h2> 
                        <h5>{reqproduct.description}</h5> 
                        <h5>{reqproduct.price}</h5> 
                    <button onClick={handleWlist} className="btn btn-primary me-5">Add to Wishlist ❤️</button>

                    <button onClick={handleCart} className="btn btn-primary">Add to Cart!</button>
                    </div>
                </div>
            )
        }
        </>
    )
}