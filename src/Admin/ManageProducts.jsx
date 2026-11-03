import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
function ManageProducts()
{
    var navigateTo=useNavigate();
    var plist=useSelector((state)=>state.product.productlist);
    return(
        <>
        <h1>All Products</h1>
        <div className="row">
            {
                plist.map((prod,ind)=>
                    
                (
                    <div className="col-md-4" key={ind}>
                        <div className="card product-card">
                        <div className="card-header">
                    <img src={prod.image} className="card-img product-img"></img>
                    <p>{prod.name}</p>
        
                        </div>
                        <div className="card-body">
                        <p>{prod.description}</p>
                        <p>{prod.price}</p>
                        <button className="btn btn-primary "  onClick={()=>navigateTo("/admin/details/"+prod.id)}>View Product Details</button>
                        </div>
                      </div>
                      </div>
            
                ))
                    
                
            
            }
            
        </div>
        </>
    )
}
export default ManageProducts