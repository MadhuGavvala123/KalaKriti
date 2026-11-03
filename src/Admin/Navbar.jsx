import { Link, Outlet } from "react-router-dom";
import { useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css'
function Navbar()
{

  var navigateTo=useNavigate("")
  useEffect(()=>
  {
    if(!localStorage.isAdminIn&&!localStorage.isUserIn)
    {
      navigateTo('/');
    }
  },[])
    return(
        <>
          <div className="d-flex min-vh-100">

    <nav
        className="offcanvas-lg offcanvas-start sidebar shadow-lg"
        tabIndex="-1"
        id="adminSidebar"
        aria-labelledby="sidebarTitle"
    >
        <div className="offcanvas-header d-lg-none">
            <h5 className="offcanvas-title fw-bold" id="sidebarTitle">
               Kalaakriti
            </h5>

            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#adminSidebar"
                aria-label="Close"
            ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column p-3">

            <div className="fw-bold fs-3 mb-4">
                <img src="/logo.png" height={60} width={160} />
                <span className="d-block fs-6 mt-2">
                    Welcome Admin!
                </span>
            </div>

             <Link className="nav-link rounded-3 p-3 mb-2 text-dark fw-semibold shadow-sm"
                to="/admin/adminhome">
               Home
            </Link>

            <Link className="nav-link rounded-3 p-3 mb-2 text-dark fw-semibold shadow-sm"
                to="/admin/manage">
                Manage Products
            </Link>

            <Link className="nav-link rounded-3 p-3 mb-2 text-dark fw-semibold shadow-sm"
                to="/admin/add">
                Add Products
            </Link>

            <Link className="nav-link rounded-3 p-3 mb-2 text-dark fw-semibold shadow-sm"
                to="/admin/vieworders">
                View All Orders
            </Link>

            <Link className="nav-link rounded-3 p-3 mb-2 text-dark fw-semibold shadow-sm"
                to="/admin/viewusers">
                 Users Data
            </Link>

            <Link className="nav-link rounded-3 p-3 mt-4 text-warning fw-semibold shadow-sm"
                to="/logout">
                Logout
            </Link>

        </div>
    </nav>

    <main className="flex-grow-1 p-3 p-lg-4">

        <button
            className="btn btn-dark d-lg-none mb-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#adminSidebar"
            aria-controls="adminSidebar"
        >
            <span className="navbar-toggler-icon"></span>
            ☰ Menu
        </button>

        <Outlet />

    </main>

</div>
        
    
        </>
    )
}
export default Navbar;