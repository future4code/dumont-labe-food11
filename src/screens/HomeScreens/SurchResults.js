import React from 'react'
import axios from 'axios'
import './SurchResults.css';
import '../../assets/back.svg';
import  { SurchResults } from '../../components/SurchResults'

const SurchResults = () => {
    return(
        <div>
            <header>
                <img src="../../assets/back.svg"/>
                <h3>Busca</h3>
            </header>

            <main>
                <input type="text" placeholder="               Restaurante"/>
                <article>
                     <SurchResults
                        searchImg={}
                        title={}
                        time={}
                        price={}
                     />
                </article>
            </main>
        </div>
    )
}
export default SurchResults;