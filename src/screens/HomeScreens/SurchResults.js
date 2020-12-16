import React from 'react';
import './SurchResults.css';
import '../../assets/back.svg';
import  { CardInfo } from '../../components/FormSignup/CardInfo'

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
                     <CardInfo
                        searchImg={'https://picsum.photos/200/150/'}
                        title={'Nome do produto'}
                        time={'tempo estimado'}
                        price={'frete do produto'}
                     />
                </article>
            </main>
        </div>
    )
}
export default SurchResults;