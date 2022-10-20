import react from 'react';
import photo from '../../img/Gallary_icon.png';
import photo1 from '../../img/gallery1.png';
import photo2 from '../../img/gallery2.png';

const gallery = () =>{
    return(
            <div className='pg_outer'>
              
         
       
             <img src = {photo1} className="gallery"/>
             <img src = {photo2} className="gallery"/>
            </div>
          

          
      

        
        
    )
}


export default gallery;