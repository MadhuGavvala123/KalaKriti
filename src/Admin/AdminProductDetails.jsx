import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteFromList, getOne } from "../ProductSlice";
import { addtocart } from "../CartSlice";
import { addtowishlist } from "../WishListSlice";
export default function AdminProductDetails()
{
    const dispatch=useDispatch();
    var navigateTo=useNavigate("")
    const {pid}=useParams();
    var reqproduct=null;
    reqproduct=useSelector((state)=>state.product.selectedProduct);
    useEffect(()=>
    {
        dispatch(getOne(pid))
    },[dispatch,pid]
    )
   
    function deleteprod(id)
    {
        dispatch(deleteFromList(id));
        alert ("Deleted the Product Succesfully")
        navigateTo("/admin/manage")
    }
   
    return(
        <>
        <h1>Details of the Product</h1>
        {
            reqproduct&&(
                <div className="row">
                    <div className="col-md-4">
                        <img src={reqproduct.image} className="img-fluid"></img>
                    </div>
                    <div className="col-md-8">
                        <h2>{reqproduct.name}</h2> 
                        <h5>{reqproduct.description}</h5> 
                        <h5>{reqproduct.price}</h5> 
                    <button  className="btn btn-primary me-5" onClick={()=>navigateTo("/admin/update/"+pid)}>Update</button>

                    <button  className="btn btn-primary" onClick={()=>deleteprod(reqproduct.id)}>Delete</button>
                    </div>
                </div>
            )
        }
        </>
    )
}