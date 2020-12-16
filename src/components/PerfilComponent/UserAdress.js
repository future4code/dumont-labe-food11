import React, {useEffect,useState} from 'react'
import {ContainerPerfil,TitleUserData,ButtonEditar,TextUserData} from './StyledPerfil'
import CreateIcon from '@material-ui/icons/Create';
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const UserAdress = (props) => {
	const history = useHistory()
	const data = JSON.parse(localStorage.getItem('user'))
	const token = data ? data.token : ''
	const [address,setAddress] = useState({})

	useEffect(() => {
			axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address',{
				headers:{
					auth:token
				}
			})
			.then((res) => {
				setAddress(res.data.address)
				localStorage.setItem('address', JSON.stringify(res.data.address))
			})
			.catch((err) => {
				console.log(err.message)
			})
	},[])
	const editarCadastrar = () => {
		if(props.hasAddress){
			history.push('/editar-endereco')
		}else{
			history.push('/endereco')
		}
	}
	return(
		<ContainerPerfil grey>
				<div>
					<TitleUserData>Endereço Cadastrado</TitleUserData>
					<TextUserData>{
						props.hasAddress ? `${address.street}, ${address.number}, ${address.complement ? address.complement : ''  }${address.complement ? ',' : ''} ${address.neighbourhood}, ${address.city}, ${address.state}` : ' Você não possui endereço Cadastrado, cadastre para poder usurfruir do app '}</TextUserData>
				</div>
				<div>
					<ButtonEditar onClick={editarCadastrar}><CreateIcon/></ButtonEditar>
				</div>
				
		</ContainerPerfil>
		)
}
export default UserAdress