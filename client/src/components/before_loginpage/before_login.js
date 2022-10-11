import React from 'react';
import './before_login.css';

const admission =() =>{
    return (
        <>
            <div className='A'>

                <div className='B'>
                        <div className='C'>
                              <h1>Admin</h1>
                        </div>
                        <a className='D' href='Admin_login' >Admin</a>
                        
                </div>

                <div className='B'>

                       <div className='C'>
                              <h1>Teacher</h1>
                        </div>
                        <a className='D' href='Teachers_login' >Teacher</a>
                </div>

                <div className='B'>
                         <div className='C'>
                              <h1>Parents</h1>
                        </div>
                        <a className='D' href='Parents_login' >Parents</a>
                </div>

            </div>
        </>
    )
}
export default admission;