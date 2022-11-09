import { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandPage from './components/Landingpage/Landingpage';
import Contact from './components/Contactpage/contact';
import Add from './components/Admissionpage/admission';
import Add2 from './components/before_loginpage/before_login';
import Facilities from './components/facilitiespage/facilities';
import Activities from './components/activity/activities';
import Gallery from './components/gallery/gallery';
import Aboutus from './components/aboutus/aboutus';
// import Footer from './components/footer/footer';
import Events_Celebration from './components/Events_Celebration/EventsCelebration';

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
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/Admission" element={<Add />} />
          <Route exact path="/facilities" element={<Facilities />} />  
          <Route exact path="/activities" element={<Activities />} />  
          <Route exact path="/eventsCelebration" element={<Events_Celebration />} />  
          <Route exact path="/gallery" element={<Gallery />} />    
          <Route exact path="/contact" element={<Contact />} />    
          <Route exact path="/before_login" element={<Add2/>} />    

        </Routes> 
        {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
