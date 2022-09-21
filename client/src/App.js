import { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandPage from './components/Landingpage/Landingpage';
import Contact from './components/Contactpage/contact';
import Admission from './components/Admissionpage/admission';


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

function App() {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  
  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', 
      {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (

    <BrowserRouter>
        <Navbar auth={auth1}/>
        <Routes>
          <Route exact path="/" element={<LandPage />} /> 
          <Route exact path="/Admission" element={<Admission />} /> 
          <Route exact path="/contact" element={<Contact />} />    
        </Routes>
    </BrowserRouter>
  );
}

export default App;
