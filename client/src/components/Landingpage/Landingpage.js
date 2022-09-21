import React from 'react';
import back_img from '../../img/big_img.png';
import "../../App.css";
import facilities from './Facilities';
import x from '../../img/Activities_1.jpg';
import y from '../../img/Events_1.jpg';

const LandPage = ()  => {
    return(
       
      <div>
           <img className='bg_img' src = {back_img}/>
           <div className='Center'>
                    <p className='Title'>Welcome <span className='s'>to</span> Kydoos</p>

                    <button className='Btn'>Admission</button>
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
                        <a href='#' className='S_btn'>
                         Read More
                        </a>


                  </div>
                  <div className='Event'>
                       <h1>Events & Celebration</h1>
                       <img src = {y} alt='asdfg' className='y' />
                       <p>
                       'Each day at Mother’s Pride is a celebration! We celebrate all the occasions with grandeur aiming to inculcate the cultural values in our Prideens.'
                       </p>
                       <a href='#' className='S_btn'>
                         Read More
                        </a>
                  </div>
             </div>
           </div>
           
      </div>
      
    )
}

export default LandPage;