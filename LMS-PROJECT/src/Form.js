import React,{useState} from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import'./MainPage';
import { Link } from "react-router-dom";



function Form() {
 
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();
  const registerUser = (data) => {};


 
  return (
    <div className="container-fluid  a1 ">
      <div className="row  mt-6">
        <div className="col-sm-5  my-6">

        </div>

        <div className="col-sm-3 bg-white  mt-5  ">

          <fieldset>
          <form onSubmit={handleSubmit(registerUser)} className="">
            <div className="col-sm my-5 text-center">
              <img
                src="https://lms.digital-lync.com/assets/logo.ab024049.png"
                alt="digital-lyc-pic"
              />
            </div>

            <div className="col-sm my-3">
              <h4 className="text-dark  text-center">Welcome</h4>

              <h4 className="text-muted  my-4" >
                {" "}
                Log in to Digital Lync to continue to Digital Lync LMS.
              </h4>
            </div>

            <div className="col-sm my-3 text-center">
              <legend>
             
              <input
                
                type="email"
                name="email"
                {...register("email", { required: true })}
                id="email"
                placeholder="Email address"
              />
              <p className=" text-danger">
                {errors["email"] && "pleaseEnter email"}
              </p>
            
              </legend>
             </div>

            <div className="col-sm my-3 text-center">

              <legend>
             
             
              <input
               
                type="password"
                name="pass"
                {...register("pass", { required: true })}
                id="pass"
                placeholder=" Password"
              />
              <p className=" text-danger">
                {errors["pass"] && " please enter Password "}
              </p>
            
              </legend>
             
             </div>
             <div className="text-primary"> 
             <ul>
              <li type="none" >
                Forgot Password ?
              </li>
            </ul>
             </div>
            

            <div className="col-sm my-3 text-center">
            
            <Link to={'/MainPage'} >    <button     className="btn btn-primary  my-4"   style={{width:'250px'}}  type="submit">

Continue

</button></Link>
            </div>
          </form>
        
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Form;
