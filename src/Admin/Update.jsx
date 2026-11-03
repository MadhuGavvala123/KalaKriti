import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToUpdate } from "../ProductSlice";
import { updateNow } from "../ProductSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
function Update()
{
     const {pid}=useParams();
    var dispatch=useDispatch();
    const uProduct=useSelector((state)=>state.product.updatedProduct) 
    

        useEffect(()=>
    {
        if(uProduct)
        {
            setpname(uProduct.name)
            setpdesc(uProduct.description)
            setpprice(uProduct.price)
            setpimg(uProduct.image)
        }
    },[uProduct])

    useEffect(()=>
    {
        dispatch(selectToUpdate(pid))
    },[dispatch,pid])


    var[pname,setpname]=useState("")
    var[pdesc,setpdesc]=useState("")
    var[pprice,setpprice]=useState("")
    var[pimg,setpimg]=useState("")

    function callToUpdate(e)
    {

        e.preventDefault();
        var newobj={
            id:uProduct.id,
            name:pname,
            price:pprice,
            image:pimg,
            description:pdesc
        }
        dispatch(updateNow(newobj));
        alert("Updated the product Successfully");
    }

   


    return(
        <>
         <form action="" onSubmit={callToUpdate}>
            <div className="form-group">
                <label className="form-label">Product Name</label>
                <input type="text" className="form-control" value={pname} onChange={(e)=>setpname(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" value={pdesc} onChange={(e)=>setpdesc(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Price</label>
                <input type="text" className="form-control" value={pprice} onChange={(e)=>setpprice(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Image URL</label>
                <input className="form-control" value={pimg} onChange={(e)=>setpimg(e.target.value)}></input>
            </div>
            <button className="btn btn-primary">Update Product</button>
        </form>
        </>
    )
}
export default Update;