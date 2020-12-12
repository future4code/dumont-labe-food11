import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {TextField} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from 'react-router-dom'


export default function Feed() {
    const history = useHistory()
    const data = JSON.parse(localStorage.getItem('user'))
    const [restaurants, setRestaurants] = useState([]);
    const [category,setCategory] = useState()

    useEffect(() => {
        if(data){
            console.log(data.token)
             if(data.user.hasAddress === true){
                    axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants", {
                         headers: {
                               auth: data.token
                    }})
                    .then((res) => {
                        console.log(res.data)
                        setRestaurants(res.data.restaurants)
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            }else{

                        history.push('/endereco')
                }
                    
         }else{
            history.push('/login')
        }
        

    },[])

const searchCategory = (cat) => {
    console.log(cat)
    setCategory(cat)
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
                {restaurants != undefined ?  
                   restaurants.map(restaurant => {
                    return(
                                <li onClick={() => searchCategory(restaurant.category)}>{restaurant.category}</li>
                         
                        )
                   }) 

               : 'carregando...'}
              </Filter>
            
            {restaurants != undefined ?  
                restaurants.map((restaurant) => {
                    if(category === restaurant.category){
                    return(
                            <CardContainer>
                                <img src={restaurant.logoUrl}/>
                                <CardInfo>
                                    <h4 className='product-name'>{restaurant.name}</h4>
                                    <p className='estimated-time'>{restaurant.deliveryTime} - {restaurant.deliveryTime + 15} min</p>
                                    <p className="fee">Frete R${restaurant.shipping},00</p>
                                </CardInfo>
                            </CardContainer>
                        )
                        }else{
                            <CardContainer>
                                <img src={restaurant.logoUrl}/>
                                <CardInfo>
                                    <h4 className='product-name'>{restaurant.name}</h4>
                                    <p className='estimated-time'>{restaurant.deliveryTime} - {restaurant.deliveryTime + 15} min</p>
                                    <p className="fee">Frete R${restaurant.shipping},00</p>
                                </CardInfo>
                            </CardContainer>
                        }
                })

            : 'Carregando...'}
            
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

