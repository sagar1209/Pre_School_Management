import React from 'react';
import data from '../Landingpage/Events'
import x from '../../img/activity1.png'
import y from '../../img/activity2.png';

const events = () => {
    return (
        <>
        <div className='container'>
        <div className='left'>
            <img src={x} alt='nothing'/>
            <img src={y} alt='nothing'/>
        </div>
        <div className='right'>
            <div className='title'><h2>EVENTS & CELEBRATION AT PRE SCHOOL</h2></div>
            <div className='data_outer'>
                {
                    data.map((item , index) => {
                        return <>
                                <div className="f">
                                    <h4>{item.name}</h4>
                                    <div className='d'>{item.description}</div>
                                </div>
                            </>
                    }
                    )
                }
            </div>
        </div>
    </div>
    </>
    )
}

export default events;