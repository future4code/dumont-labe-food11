import React from 'react';

export function SurchResults(props) {
    return (
        <div>
            <img className='searchImg' src={props.searchImg} alt=''/>
            <div className='title'>{props.title}</div>
            <div className='time'>{props.time}</div>
            <div className='price'>{props.price}</div>
        </div>
    )
}