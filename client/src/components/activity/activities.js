import React from 'react';
import data from '../Landingpage/Activities'
import x from '../../img/activity1.png'
import y from '../../img/activity2.png';

const activities = () => {
    return (
        <>
        <div className='container'>
        <div className='left'>
            <img src={x} alt='nothing'/>
            <img src={y} alt='nothing'/>
        </div>
        <div className='right'>
            <div className='title'><h2>ACTIVITIES AT PRE SCHOOL</h2></div>
            <div className='data_outer'>
                {
                    data.map((item , index) => {
                        return <>
                                <div className="f">
                                    <h4>{item.name}</h4>
                                    <div className='d'>{item.desription}</div>
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

export default activities;