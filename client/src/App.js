import { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandPage from './components/Landingpage/Landingpage';
import Contact from './components/Contactpage/contact';
import bl from './components/before_loginpage/before_login';
import Add from './components/Admissionpage/admission';
import Add2 from './components/before_loginpage/before_login';
import Register from './components/register/register'
import Admin_login from './components/login/admin_login';
import Teacher_login from './components/login/teacher_login';
import Parent_login from './components/login/parents_login';



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
          <Route exact path="/Admission" element={<Add />} /> 
          <Route exact path="/contact" element={<Contact />} />    
          <Route exact path="/before_login" element={<Add2/>} />    
          <Route exact path="/Register" element={<Register />} />  
          <Route exact path="/Admin_login" element={<Admin_login/>} /> 
          <Route exact path="
          /Admin_login/landing" element={<Admin_login/>} /> 
          <Route exact path="/Teachers_login" element={<Teacher_login/>} /> 
          <Route exact path="/Parents_login" element={<Parent_login/>} /> 
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
