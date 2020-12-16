import React from 'react';
import axios from 'axios'
import './SurchNoResults.css';
import '../../assets/back.svg';

const SurchNoResults = () => {
    return(
        <div>
            <header>
                <img src="../../assets/back.svg"/>
                <h3>Busca</h3>
            </header>

            <main>
                <input type="text" placeholder="               Restaurante"/>
                <p><b>Busque por nome de restaurante</b></p>
            </main>
        </div>
    )
}
export default SurchNoResults;