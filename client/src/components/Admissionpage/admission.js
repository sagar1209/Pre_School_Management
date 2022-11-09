// import { Link } from 'react-router-dom';
// import React, { useState } from "react";
// const express = require('express');
// const router = new express.Router();
// const client = require("Models/AdmissionSchema.js")
import Footer from "../footer/footer";
// import useHistory from "react";
import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./admission.css";

import { Tab } from "bootstrap";
// import { Tab } from "bootstrap";


// var NewComponent = React.createClass({
//   render: function() {
//     return (
      




const Admissionpage = () => {


return(
<>

      <div className="admission">
        <br></br>
        <br></br>
        <br></br>
        <h1 id="title"> Admission Form </h1> 
        
        {/* <h1></h1>
        <h1>Admission</h1> */}
        </div>
        <div id="form">
          <form id="survey-form">
          <br></br>
          <p></p>
          <br></br>
          <br></br>
          <br></br>
            <label id="name-label" htmlFor="name">Student Name</label><br />
            <input type="text" id="name" name="name" placeholder="Student name" className="input-text" /><br /><br />

            <label id="name-label" htmlFor="name">Parent Name</label><br />
            <input type="text" id="name" name="name" placeholder="Parent name" className="input-text" /><br /><br />

            <label id="name-label" htmlFor="name">Address</label><br />
            <input type="text" id="name" name="name" placeholder="Address" className="input-text" /><br /><br />

            <label id="email-label" htmlFor="email">Email</label><br />
            <input type="email" id="email" name="email" placeholder="Your email" className="input-text" /><br /><br />
            <label id="number-label" htmlFor="number">Contact Number</label><br />
            <input type="number" id="number" name="number" min={10} max={10} placeholder="Enter a 10 digits number" className="input-number" /> <br /><br />
            <p>How old Your Child ?</p>
            <select id="dropdown" name="availability" className="forme-control">
              <option value="yes">3</option>
              <option value="yes">4</option>
              <option value="yes">5</option>
              <option value="yes">6</option>
              <option value="yes">7</option>
              
            </select>
            <p>Gender</p>
            <input type="radio" name="place" id="france" className="input-radio" />  
            <label className="radio-label" id="male">Male</label><br />
            <input type="radio" name="place" id="united-kingdom" className="input-radio" />  
            <label className="radio-label" id="female">Female</label><br />
            <input type="radio" name="place" id="anywhere" className="input-radio" />  
            <label className="radio-label" id="other">Other</label><br />


            <p>Standard</p>
            <input type="radio" name="place" id="france" className="input-radio" />  
            <label className="radio-label" id="Nursury">Playgroup</label><br />
            <input type="radio" name="place" id="united-kingdom" className="input-radio" /> 
            <label className="radio-label" id="Nursury">Nusery</label><br />
            <input type="radio" name="place" id="united-kingdom" className="input-radio" />  
            <label className="radio-label" id="female">Junior</label><br />
            <input type="radio" name="place" id="anywhere" className="input-radio" />  
            <label className="radio-label" id="other">Senior</label><br />

            <p>Enter additional comments:</p>
            <textarea id="comments" name="comment" placeholder="Add comment" rows={1} colws={1} className="textarea" defaultValue={""} /><br />


<div className="image">
            <div className="row align-items-center py-3" >
              <div className="col-md-2 ps-90">

                 <h5 className="mb-0">Upload Student Photo</h5>

              </div>
               <div className="col-md-8 pe-9"> 

               <input className="form-control form-control-lg" id="formFileLg" type="file" />
                 <div className="small text-muted mt-9">Upload Student Photo 50 MB</div>
               </div>
               </div>
        </div>


            <input type="submit" name="submit" id="submit" defaultValue="Submit" />
          </form>
        </div>
        <Footer/>
      {/* </div> */}


      </>
    );
};







 



   



export default Admissionpage