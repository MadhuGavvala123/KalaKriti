// import { Link, Outlet } from "react-router-dom";
// import { useEffect,useState} from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { getCartbyusername } from "../CartSlice";
// import { useNavigate } from "react-router-dom";
// import { getWlistbyusername } from "../WishListSlice";
// import './UNavbar.css'
// function UNavbar()
// {

//   var navigateTo=useNavigate("")
//   var dispatch=useDispatch()
//     var cartitems=useSelector((state)=>state.cart.newcart)
//     useEffect(()=>
//     {
//         var username=localStorage.getItem("isUserIn");
//         dispatch(getCartbyusername(username))
//         dispatch(getWlistbyusername(username))
//     },[dispatch])

//      var wishlistitems=useSelector((state)=>state.wishlist.mywishlist)
   

//     var [uname,setuname]=useState("")
//   useEffect(()=>
//   {
//     if(!localStorage.isUserIn)
//     {
//       navigateTo('/');
//     }
//     else{
//         var uname=localStorage.getItem("isUserIn");
//         setuname(uname);
//     }
//   },[])
//     return(
//         <>
//         <div className="d-flex min-vh-100 kalakriti-layout">

//     <nav className="kalakriti-sidebar shadow-lg p-3 flex-shrink-0">

//         <div className="fw-bold fs-3 mb-4 text-center">
//             <img src="/logo.png" height={60} width={160} />
//             <span className="d-block fs-6 mt-2 welcome-text">
//                 Welcome to Kalakriti {uname}!
//             </span>
//         </div>

//         <Link className="nav-link kalakriti-link" to="/user/userhome">
//             <i className="bi bi-house-door me-2"></i> Home
//         </Link>

//         <Link className="nav-link kalakriti-link" to="/user/viewprods">
//             <i className="bi bi-grid me-2"></i> View Products
//         </Link>

//         <Link className="nav-link kalakriti-link" to="/user/cart">
//             <i className="bi bi-cart3 me-2"></i> Cart
//             <span className="badge ms-auto">{cartitems?.length}</span>
//         </Link>

//         <Link className="nav-link kalakriti-link" to="/user/wish">
//             <i className="bi bi-heart me-2"></i> Wishlist
//             <span className="badge ms-auto">{wishlistitems?.length}</span>
//         </Link>

//         <Link className="nav-link kalakriti-link" to="/user/myorders">
//             <i className="bi bi-box-seam me-2"></i> My Orders
//         </Link>

//         <Link className="nav-link kalakriti-logout mt-4" to="/logout">
//             <i className="bi bi-box-arrow-right me-2"></i> Logout
//         </Link>

//     </nav>

//     <main className="flex-grow-1 kalakriti-content p-3 p-md-4">
//         <Outlet />
//     </main>

// </div>
     
    
//         </>
//     )
// }
// export default UNavbar;





import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartbyusername } from "../CartSlice";
import { getWlistbyusername } from "../WishListSlice";
import { useNavigate } from "react-router-dom";
import "./UNavbar.css";

function UNavbar() {
    var navigateTo = useNavigate();
    var dispatch = useDispatch();

    var cartitems = useSelector((state) => state.cart.newcart);
    var wishlistitems = useSelector((state) => state.wishlist.mywishlist);

    var [uname, setuname] = useState("");
    var [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        var username = localStorage.getItem("isUserIn");

        if (username) {
            dispatch(getCartbyusername(username));
            dispatch(getWlistbyusername(username));
            setuname(username);
        } else {
            navigateTo("/");
        }
    }, [dispatch, navigateTo]);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <div className="d-flex min-vh-100 kalakriti-layout">

            
            <div className="mobile-topbar">
                <button
                    className="hamburger-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
                </button>

                <img src="/logo.png" height="45" width="125" />
                <span className="mobile-welcome">Hi, {uname}!</span>
            </div>

         
            <nav className={`kalakriti-sidebar shadow-lg p-3 flex-shrink-0 ${menuOpen ? "show-sidebar" : ""}`}>

                <div className="fw-bold fs-3 mb-4 text-center desktop-logo">
                    <img src="/logo.png" height={60} width={160} />
                    <span className="d-block fs-6 mt-2 welcome-text">
                        Welcome to Kalakriti {uname}!
                    </span>
                </div>

                <Link className="nav-link kalakriti-link" to="/user/userhome" onClick={closeMenu}>
                    <i className="bi bi-house-door me-2"></i> Home
                </Link>

                <Link className="nav-link kalakriti-link" to="/user/viewprods" onClick={closeMenu}>
                    <i className="bi bi-grid me-2"></i> View Products
                </Link>

                <Link className="nav-link kalakriti-link" to="/user/cart" onClick={closeMenu}>
                    <i className="bi bi-cart3 me-2"></i> Cart
                    <span className="badge ms-auto">{cartitems?.length}</span>
                </Link>

                <Link className="nav-link kalakriti-link" to="/user/wish" onClick={closeMenu}>
                    <i className="bi bi-heart me-2"></i> Wishlist
                    <span className="badge ms-auto">{wishlistitems?.length}</span>
                </Link>

                <Link className="nav-link kalakriti-link" to="/user/myorders" onClick={closeMenu}>
                    <i className="bi bi-box-seam me-2"></i> My Orders
                </Link>

                <Link className="nav-link kalakriti-logout mt-4" to="/logout" onClick={closeMenu}>
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                </Link>

            </nav>

            
            {menuOpen && (
                <div className="sidebar-overlay" onClick={closeMenu}></div>
            )}

            <main className="flex-grow-1 kalakriti-content p-3 p-md-4">
                <Outlet />
            </main>

        </div>
    );
}

export default UNavbar;
