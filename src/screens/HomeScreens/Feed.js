import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {TextField} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';


export default function Feed() {

    const [restaurants, setRestaurants] = useState([]);

    const getRestaurants = () => {
        const token = null

        axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants", {
        headers: {
            Authorization: token
        }})
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }



    return (
        <Container>
            <Title> FutureEats </Title>
            <SearchBarContainer>
            <SearchIcon className="search-icon"/>
            <TextField
             className='search-input'
             id="filled-password-input"
             label='Restaurante'
             variant="outlined"
            />
            </SearchBarContainer>
            <Filter>
                <li>Burguer</li>
                <li>Asiática</li>
                <li>Massas</li>
                <li>Saudáveis</li>
            </Filter>

            <CardContainer>
                <img src='https://picsum.photos/200/150/'/>
                <CardInfo>
                    <h4 className='product-name'>Nome do produto</h4>
                    <p className='estimated-time'>Tempo estimado</p>
                    <p className="fee">Frete 10,00</p>
                </CardInfo>
            </CardContainer>
            
        </Container>
    )
}


// GREEN: #5bb647
// GREY: #cfcfcf

const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
   
`
const SearchBarContainer = styled.div `
    display: flex;
    align-items: center;
    width: 80%;

    .search-icon {
        position: absolute;
        margin-left: 70%;
        padding: 10px;
    }
    .search-input{
        width: 100%;
    }
  
`

const Title = styled.h3 `
    text-align: center;
    font-size: 20px;
`

const Filter = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    
    li {
        list-style: none;
        padding: 5px;
    }
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    width: 80%;
    margin: 50px auto;
`
const CardInfo = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    
    .product-name {
        color: #5bb647;
        
    }
    .estimated-time {
        grid-column-start: 1;
        grid-row-start: 2;

    }
    .fee {
        grid-column-start: 2;
        grid-row-start: 2;
    }
`

