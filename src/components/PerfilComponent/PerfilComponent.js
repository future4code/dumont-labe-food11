import React,{useState,useEffect} from 'react'
import UserData from './UserData'
import {ContainerPerfilComponent,TitleOrderHistoryComponent} from './StyledPerfil'
import UserAdress from './UserAdress'
import OrderHistory from './OrderHistory'
import axios from 'axios'

const PerfilComponent = () => {
	const data = JSON.parse(localStorage.getItem('user'))
	const token = data.token
	const [ user,setUser ] = useState({})
	const [cpf,setCpf] = useState('')

	useEffect(() => {
		
		axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile',{
			headers:{
				auth: token
			}
		})
		.then((res) => {
			setUser(res.data.user)
			let valueCpf = res.data.user.cpf
			valueCpf = valueCpf.replace(/\D/g,"")
			valueCpf = valueCpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")
			setCpf(valueCpf)
			console.log(res.data)
		})
		.catch((err) => {
			console.log(err)
		})
	},[])

	
	

		
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
				token={token}
			/>
			<div>
				<TitleOrderHistoryComponent>Historico de Pedidos</TitleOrderHistoryComponent>
				<OrderHistory
					token={token}
				/>
			</div>
		</ContainerPerfilComponent>
		)
}
export default PerfilComponent