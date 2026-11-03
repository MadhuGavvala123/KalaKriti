import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import './Signin.css'

function Signin() {
  var navigateTo = useNavigate("");
  var username = useRef("");
  var password = useRef("");
  var checkSignin = (e) => {
    e.preventDefault();
    var reqpwd = username.current.value.slice(0, 3) + "123";
    if (
      password.current.value == reqpwd &&
      username.current.value === "Admin"
    ) {
      alert("Successfully Signed In as Admin!");
      navigateTo("/admin/adminHome");
      localStorage.setItem("isAdminIn", username.current.value);
    } else if (password.current.value == reqpwd && username !== "Admin") {
      alert("Successfully Signed In as User!");
      navigateTo("/user/userHome");
      localStorage.setItem("isUserIn", username.current.value);
    } else {
      alert("Login Failed!");
    }
  };
  return (
    <>
     <form className="min-vh-100 d-grid  justify-items-center p-3 form-cls" onSubmit={checkSignin}>
      <div className="row">
         <h1 className="display-4 fw-bold text-center" style={{  fontFamily: "Copperplate, Papyrus, fantasy",
    fontSize: "58px", color: "#713f22" }}>
  KalaKrithi
</h1>
      </div>
     <div>
  <div className="container-fluid d-flex justify-content-center form-container">
<img
  src="/assets/signin.png"
  className="craft-image img-fluid col-4 col-md-4 col-lg-5 rounded-4 shadow-lg"
  alt="KalaKrithi Handicrafts"
/>    <div className="card shadow-lg border-0 rounded-4 p-3 p-md-4 w-100 form-card" style={{ maxWidth: "450px" }}>
      <div className="card-body">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">Welcome Back!</h2>
          <p className="text-secondary mb-0">Please login to continue</p>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold form-labels">Username</label>
          <input
            type="text"
            ref={username}
            className="form-control form-control-lg rounded-3"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold form-labels">Password</label>
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
          Sign In
        </button>

        <p className="text-center text-muted small mt-4 mb-0">
          Securely access your account
        </p>
      </div>
    </div>
  </div>
  </div>
</form>
      
    </>
  );
}
export default Signin;
