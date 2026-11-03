import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  var navigateTo = useNavigate("");
  var username = useRef("");
  var password = useRef("");
  var loggout=(e)=>
  {
    e.preventDefault();
   var val=localStorage.getItem("isAdminIn");
   var val2=localStorage.getItem("isUserIn")
    if(username.current.value===val)
    {
        localStorage.removeItem("isAdminIn")
        navigateTo('/');
    }
    else if(username.current.value===val2)
    {
         localStorage.removeItem("isUserIn")
        navigateTo('/');
    }

    else{
        alert("Logout credentials are not correct")
    }
  }

  return (
    <>
     <form className="min-vh-100 d-flex justify-content-center align-items-center bg-primary bg-gradient p-3" onSubmit={loggout}>
  <div className="container-fluid d-flex justify-content-center">
    <div className="card shadow-lg border-0 rounded-4 p-3 p-md-4 w-100" style={{ maxWidth: "450px" }}>
      <div className="card-body">
        <div className="text-center mb-4">
          <p className="text-secondary mb-0">Logout from your Account</p>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Username</label>
          <input
            type="text"
            ref={username}
            className="form-control form-control-lg rounded-3"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            ref={password}
            className="form-control form-control-lg rounded-3"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold shadow-sm py-2"
          type="submit"
        >
          Sign Out
        </button>

      
      </div>
    </div>
  </div>
</form>
      
    </>
  );
}
export default Logout;
