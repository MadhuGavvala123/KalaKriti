import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersbyusername } from "../OrderSlice";

export function Orders()
{
    var dispatch=useDispatch()
    var orderslist=useSelector((state)=>state.order.myorders)
    useEffect(()=>
    {
        var username=localStorage.getItem("isUserIn");
        dispatch(getOrdersbyusername(username))
    },[dispatch])
    return(
        <>

        
        <div className="row">
            {
                orderslist.map((item,ind)=>(
                    
                    <div className="col-md-4" key={ind}>
                       
                        <div className="card">
                            <div className="card-header">
                                <img src={item.image} className="card-img product-img "></img>
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
export default Orders;