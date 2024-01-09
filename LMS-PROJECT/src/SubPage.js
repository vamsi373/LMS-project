import React, {useState} from "react";
import "./Subpage.css"


 function SubPage(){
    const [sub ,setSub]=useState([
        {
            imgSrc:"https://img.freepik.com/free-vector/frontend-developer-typographic-header-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-304.jpg?w=2000",

            Name:"FS-Basics-2301-08:30 AM",
            Name1:"Sajeed",
            courseduration:"2months",

            continue:"Demo",
            live:"Register",
        },
        {
            imgSrc:"https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"  ,
            Name:" React Js - 2302 8 AM",
            Name1:"Manideep",
            continue:"Demo",
            live:"Register",
            courseduration:"1months",
        }
    ])
    return (
        <div className=" container">
            <h1>Courses List</h1>
           {sub.map((subs) => (
            <div className="row  border my-3  a2">
            <div className="col-sm-3 my-3">
                <img src={subs.imgSrc}  width="250px" alt="FS-Basics-2301-08:30 AM"/>

            </div>
            <div className="col-sm-6 my-3">
                <h4>{subs.Name}</h4>
                <h4 className="text-muted">{subs.Name1}</h4>
                <h4 className="text-muted my-3"> Course Duration:{subs.courseduration}</h4>


            </div>
            <div className="col-sm-3 my-3  ">
                <button className=" my-3 btn btn-primary " style={{width:'150px'}} ><h4>{subs.continue}</h4></button><br></br>
                <button className="btn btn-success" style={{width:'150px'}}><h4>{subs.live}</h4></button>

            </div>

        </div>
           )
            
           )}
               <div className="row my-5">
                <div className="col-sm">
                <h4 className=""> Your Courses:</h4>
                <h4 className="text-center"> Empty</h4>


                </div>
               


               </div>
        </div>
    )
 }


 export default SubPage;