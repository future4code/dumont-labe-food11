import React from 'react'
import {ContainerPerfil,ButtonEditar,TextUserData} from './StyledPerfil'
import CreateIcon from '@material-ui/icons/Create';
import {useHistory} from 'react-router-dom'

const UserData = (props) => {
	const history = useHistory()
	const editProfile = () => {
		history.push('/editar-cadastro')
	}
	return(
		<ContainerPerfil>
			<div>
				<TextUserData>{props.name}</TextUserData>
				<TextUserData>{props.email}</TextUserData>
				<TextUserData>{props.cpf}</TextUserData>
			</div>
			<ButtonEditar onClick={editProfile}><CreateIcon/></ButtonEditar>
		</ContainerPerfil>
		)
}
export default UserData