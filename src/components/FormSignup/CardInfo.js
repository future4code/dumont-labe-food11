import React from 'react';
import axios from 'axios';
import { baseUrl } from '../../constants/baseUrl';
import '../../screens/HomeScreens/SurchResults.css'

export function CardInfo(props) {
    /*const getCardInfo = (name) => {
        axios.get(`${baseUrl}/${name}`)
            .then(  => {

            })
            .catch(  => {
                
            })
    }*/
    
    return (
        <div className='CardInfo'>
            <img className='searchImg' src={props.searchImg} alt=''/>
            <div className='title'>{props.title}</div>
            <div className='info'>
                <div className='time'>{props.time}</div>
                <div className='price'>{props.price}</div>
            </div>
        </div>
    );
}