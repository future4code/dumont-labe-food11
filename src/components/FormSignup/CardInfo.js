import React from 'react';
import '../../screens/HomeScreens/SurchResults.css'

export function CardInfo(props) {
    return (
        <div className='CardInfo'>
            <img className='searchImg' src={props.searchImg} alt=''/>
            <div className='title'>{props.title}</div>
            <div className='info'>
                <div className='time'>{props.time}</div>
                <div className='price'>{props.price}</div>
            </div>
        </div>
    )
}