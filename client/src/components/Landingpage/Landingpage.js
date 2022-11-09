import React from 'react';
import back_img from '../../img/big_img.png';
import "../../App.css";
// import Footer from "../footer/footer"
import facilities from './Facilities';
import x from '../../img/Activities_1.jpg';
import y from '../../img/Events_1.jpg';
import photo from '../../img/Gallary_icon.png';
import Footer from '../footer/footer';
import photo1 from '../../img/photo1.png';
import photo2 from '../../img/photo2.png';
import photo3 from '../../img/photo3.png';
import photo4 from '../../img/photo4.png';
import photo5 from '../../img/photo5.png';
import photo6 from '../../img/photo6.png';
import photo7 from '../../img/photo7.png';
import photo8 from '../../img/photo8.png';


const LandPage = ()  => {
    return(
       
      <div>
           <img className='bg_img' src = {back_img}/>
           <div className='Center'>
                    <p className='Title'>Welcome <span className='s'>to</span> Kydoos</p>
                    <a href='/admission'><button className='Btn'>Admission</button></a>
                  
                        </div>
           <div className='facilities'> 
            
           {facilities.map( Facilities => {
               return (
                  <div className='rotet'>
                     <div className ='front'>
                           <img src={Facilities.image} alt='asdfg' className='grid_img'/>
                           <h1>{Facilities.name}</h1>
                     </div>
                     <div className='back'>
                            <h1>{Facilities.desription}</h1>
                     </div>
                  </div>   
               )
           })}
           </div>
           <div className='body'>
             <div className='card'>
                  <div className='Activity'>
                        <h1> Activities</h1>
                        <img src = {x} alt='asdfg' className='x'/>
                        <p>
                        'At Mother’s Pride, a perfect amalgamation of classroom and co-curricular activities ensure that the toddlers enjoy coming to school and learning new concepts.'
                        </p>
                        <a href='/activities' className='S_btnn'>
                         Read More
                        </a>


                  </div>
                  <div className='Event'>
                       <h1>Events & Celebration</h1>
                       <img src = {y} alt='asdfg' className='y' />
                       <p>
                       'Each day at Mother’s Pride is a celebration! We celebrate all the occasions with grandeur aiming to inculcate the cultural values in our Prideens.'
                       </p>
                       <a href='/eventsCelebration' className='S_btn'>
                         Read More
                        </a>
                  </div>
             </div>
           </div>
           <div className='Photo_Gallary'>
                <p className='pg'>
                    <img src = {photo} className="photo_icon"/>
                    <h1>PHOTO GALLARY</h1>
                </p>
                <div className='photo_grid'>
                  <img src={photo1} alt="galarry" />
                  <img src={photo2} alt="galarry" />
                  <img src={photo3} alt="galarry" />
                  <img src={photo4} alt="galarry" />
                  <img src={photo5} alt="galarry" />
                  <img src={photo6} alt="galarry" />
                  <img src={photo7} alt="galarry" />
                  <img src={photo8} alt="galarry" />
                </div>
           </div>
           
           
           <Footer />
           
      </div>
      
    )
}

export default LandPage;