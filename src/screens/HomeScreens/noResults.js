import React from 'react'
import axios from 'axios'
import './SurchNoResults.css';
import '../../assets/back.svg';

const noResults = () => {
    return(
        <div>
            <div>
            <header>
                <img src="../../assets/back.svg"/>
                <h3>Busca</h3>
            </header>

            <main>
                <input type="text" placeholder="               Restaurante"/>
                <p><b>Não encontramos :(</b></p>
            </main>
        </div>
        </div>
    )
}
export default noResults;