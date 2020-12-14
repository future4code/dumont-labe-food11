import React, {useState,useEffect} from 'react'
import {ContainerOrderHistory,TitleOrderHistory,PriceOrderHistory,ButtonEditar,TextUserData} from './StyledPerfil'
import CreateIcon from '@material-ui/icons/Create';
import axios from 'axios'

const OrderHistory = (props) => {


	useEffect(() => {
		/* axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history',{
			headers:{
				auth: props.token
			}
		})
		.then((res) => {
			console.log(res.data)
		})
		.catch((err) => {
		}) */

	})
	return(
		<ContainerOrderHistory>
			<div>
				<TitleOrderHistory>Nome do Restaurante</TitleOrderHistory>
				<TextUserData>23 outubro 2019</TextUserData>	
				<PriceOrderHistory>SUBTOTAL R$89,90</PriceOrderHistory>
			</div>
						
		</ContainerOrderHistory>
		)
}
export default OrderHistory