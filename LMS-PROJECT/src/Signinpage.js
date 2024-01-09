import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin() {
  const Navigate = useNavigate();
  const l = true;
  const Form = () => {
    if (l) {
      Navigate("/Form");
      window.alert("welcome");
    } else {
      window.alert("error");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 text-center mt-3">
          <img
            src="https://lms.digital-lync.com/assets/logo.ab024049.png"
            alt="digital-lyc-pic"
          />
          <div className="" style={{ marginTop: "150px" }}>
            <h1 className="">Welcome</h1>
            <p>Please sign in to your account below</p>
            <Link to={'/Form'} >
              <button
                style={{ marginTop: "40px", width: "260px", height: "45px" }}
                className="btn btn-primary"
              >
                Sign In
              </button>
            </Link>

           
          </div>
        </div>
        <div className="col-sm-6 text-center">
          <img
            src="https://lms.digital-lync.com/assets/illustration-login.a3c562cb.jpg "
            alt="pic"
            className="mb-5"
            style={{ width: "700px", height: "700px" }}
          />

          <div style={{ position: "fixed", right: "15px", top: "530px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "green",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                marginRight: "-6px",
                border: "5px solid white",
              }}
            ></span>
            <button
              className="sticky-top btn btn-info"
              style={{
                borderRadius: "30px 20px 0 30px",
                width: "220px",
                height: "60px",
                overflow: "visible",
              }}
            >
              How can we help you?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin;
