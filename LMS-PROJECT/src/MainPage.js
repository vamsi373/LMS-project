import React from "react";
import "./Mainpage.css";
import SubPage from "./SubPage";

function MainPage() {
  return (
    <div className="container-fluid">
      <div>
      <div className="row">
        <div className=" col-sm-10  rounded-circle">
          <img
            src="https://lms.digital-lync.com/assets/logo.ab024049.png"
            alt="digital-lyc-pic"
          />
        </div>

        <div className="col-sm  rounded-circle">
          <img
            alt="Profile"
            src="https://s.gravatar.com/avatar/b883ecba9f1ba033327428f736e102e9?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgv.png" width={'100px'}
          />
        </div>
       
      </div>
      <div className="row">
      <div className=" col-sm">
        <p>  <img  src="https://lms.digital-lync.com/assets/banner.9efe063b.jpg" width="1350px" height="400px"/>
        <h1 >Welcome to Kona LMS! 🚀</h1>
        </p>
          
        </div>
        <div className="row">
          <div className="col-sm">
            <SubPage/>

          </div>

        </div>
      </div>
      </div>
    </div>
  );
}

export default MainPage;
