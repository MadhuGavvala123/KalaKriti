import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProducts } from "../ProductSlice";
import { useNavigate } from "react-router-dom";
export default function AddProducts()
{
    var navigateTo=useNavigate("");
    var[pid,setpid]=useState("")
    var[pname,setpname]=useState("");
    var[pdesc,setpdesc]=useState("");
    var[pprice,setpprice]=useState("");
    var[pimg,setpimg]=useState("");
    var[pcateg,setpcateg]=useState("");
    var dispatch=useDispatch();
    var addNow=(e)=>
    {
        e.preventDefault();
        var newobj={
            id:pid,
            name:pname,
            description:pdesc,
            price:pprice,
            image:pimg
        }
        dispatch(addProducts(newobj))
        alert("Product Added Successfully!")
    }
    return(
        <>
         <div className="d-flex justify-content-center align-items-start w-100">

            <form
                onSubmit={addNow}
                className="card shadow-lg border-0 rounded-4 p-4 w-100"
                style={{ maxWidth: "450px" }}
            >
                <h3 className="text-center mb-4">Add Product</h3>

                <div className="mb-3">
                    <label className="form-label">Product Id</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pid}
                        onChange={(e) => setpid(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pname}
                        onChange={(e) => setpname(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pdesc}
                        onChange={(e) => setpdesc(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        value={pprice}
                        onChange={(e) => setpprice(e.target.value)}
                        min="0"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pimg}
                        onChange={(e) => setpimg(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pcateg}
                        onChange={(e) => setpcateg(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100" onClick={()=>navigateTo("/admin/manage")}>
                    Add the Product
                </button>
            </form>

        </div>
        
        </>
    )
}