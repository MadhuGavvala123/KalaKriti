import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function ViewProducts()
{
     var navigateTo=useNavigate("");
    var plist=useSelector((state)=>state.product.productlist);

     var [category,setCategory]=useState("")
     var filteredProducts=category==""?plist:plist.filter((obj)=>obj.category===category)
    var dispatch=useDispatch()
  
  
    return(
        <>
        <div className="container viewprod-bg" >
        <div className="category-box">
    <label className="form-label">Choose Category</label>
    <select
        className="form-select category-cls"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
    >
        <option value="">Select Category</option>
        <option value="Pottery">Pottery</option>
        <option value="Wax">Wax Products</option>
        <option value="Paintings">Paintings</option>
    </select>
</div>
        <h1>The Specially Handcrafted!</h1>
        <div className="row">
            {
                filteredProducts.map((pro,ind)=>(
                    
                    <div className="col-md-4" key={ind}>
                        <button className="product-btn" onClick={()=>navigateTo("/user/details/"+pro.id)}>
                        <div className="card product-card">
                            <div className="card-header ">
                                <img src={pro.image} className="card-img  product-img"></img>
                                <h1>{pro.name}</h1>
                            </div>
                            <div className="card-body ">
                            <p>{pro.description}</p>
                            <p>{pro.price}/-rs</p>
                            </div>
                            </div>
                            </button>
                    </div>
                    

                ))
            }
        </div>
        </div>
        </>
    )
}
export default ViewProducts