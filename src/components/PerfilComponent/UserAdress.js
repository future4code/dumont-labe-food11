import React from 'react'
import {ContainerPerfil,TitleUserData,ButtonEditar,TextUserData} from './StyledPerfil'
import CreateIcon from '@material-ui/icons/Create';

const UserAdress = () => {
	return(
		<ContainerPerfil grey>
				<div>
					<TitleUserData>Endereço Cadastrado</TitleUserData>
					<TextUserData>Rua de teste,25 - Bairro Teste</TextUserData>
				</div>
				<div>
					<ButtonEditar><CreateIcon/></ButtonEditar>
				</div>
				
		</ContainerPerfil>
		)
}
export default UserAdress