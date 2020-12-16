import React,{useState,useEffect} from 'react'
import UserData from './UserData'
import {ContainerPerfilComponent,TitleOrderHistoryComponent} from './StyledPerfil'
import UserAdress from './UserAdress'
import OrderHistory from './OrderHistory'
import axios from 'axios'
import useGetProfile from '../../hooks/useGetProfile'

const PerfilComponent = () => {
	const [user,cpf,tokenRequest] = useGetProfile()

	return(
		<ContainerPerfilComponent>
			<UserData 
				name={user.name}
				email={user.email}
				cpf={cpf}
			/>
			<UserAdress
				hasAddress={user.hasAddress}
				id={user.id}
				token={tokenRequest}
			/>
			<div>
				<TitleOrderHistoryComponent>Historico de Pedidos</TitleOrderHistoryComponent>
				<OrderHistory
				/>
			</div>
		</ContainerPerfilComponent>
		)
}
export default PerfilComponent