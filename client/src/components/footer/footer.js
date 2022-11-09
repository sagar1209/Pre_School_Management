import React from "react";
import { Link } from 'react-router-dom';
import './footer.css';
const Footer = () => {
    return<>
    <div className='Footer'>
      <div className='box'>
        <div className='upper'>
          <div className='call_us'>
            <i class="bi bi-telephone"></i>
            <div className='call_outer'>
              <p>Call Us</p>
              <p>+91 000-00-00000</p>
            </div>
          </div>
          <div className='mail_us'>
            <i class="bi bi-envelope"></i>
            <div className='mail_outer'>
              <p>Mail Us</p>
              <a href="https://mail.google.com/" >abc@gmail.com</a>
            </div>
          </div>
        </div>
        <hr />
        <div className='lower'>
          <section>
            <img src='https://openclipart.org/download/284282/publicdomainq-0009896wneoay.svg' alt=''></img>
            <p className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            {/* <p className='follow'></p> */}
            <div className='icons'>
         
              <a href="https://www.facebook.com/" ><i class="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/" >
              <i class="bi bi-instagram"></i></a>
              <a href="https://twitter.com/i/flow/login" ><i class="bi bi-twitter"></i></a>
              <a href="https://www.youtube.com/" ><i class="bi bi-youtube"></i></a>
              
              <a href="https://www.linkedin.com/login" ><i class="bi bi-linkedin"></i></a>
              
            </div>
            {/*  */}
          </section>
          
          <div className='useful_link' >
            <p></p>
           
            <ul>
            <li className="nav-item">
            <a className="nav-link" href="/">
            
              HOME
            </a>
          </li>
          

            <li className="nav-item">
            <a className="nav-link" href="/about">
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/facilities">
              FACILITIES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/gallery">
              GALLERY
            </a>
          </li>
              </ul>
              </div>
              <div className='useful_link'>
              <p></p>
              <ul>
              
              <li className="nav-item">
            <a className="nav-link" href="/activities">
              ACTIVITIES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/eventsCelebration">
              EVENTS & CELEBRATIONS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admission">
              ADMISSION
            </a>
            </li>
           
            <li className="nav-item">
            <a className="nav-link" href="/contact">
              CONTACT
            </a>
          </li>
          </ul>
          </div>
              <div>
           <section>
            <img src='https://scontent.famd14-1.fna.fbcdn.net/v/t39.30808-6/278641599_111698301515517_4162407072246061070_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tRW6_e4AVwQAX8CrxsW&_nc_ht=scontent.famd14-1.fna&oh=00_AfCZmtgP1tDkDhwKxQzq3NRNq6qRZprTtNZ7TtBw3CVKFQ&oe=636FD1B9' alt=''></img>
            </section>
          </div>
         
          
        </div>
        
      </div>
    </div>
    </>
}

export default Footer;


