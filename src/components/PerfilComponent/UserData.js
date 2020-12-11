import React from 'react'
import {ContainerPerfil,ButtonEditar,TextUserData} from './StyledPerfil'
import CreateIcon from '@material-ui/icons/Create';

const UserData = (props) => {
	return(
		<ContainerPerfil>
			<div>
				<TextUserData>{props.name}</TextUserData>
				<TextUserData>{props.email}</TextUserData>
				<TextUserData>{props.cpf}</TextUserData>
			</div>
			<ButtonEditar><CreateIcon/></ButtonEditar>
		</ContainerPerfil>
		)
}
export default UserData