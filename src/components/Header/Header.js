import React from 'react'
import {HeaderComponent,ButtonComponent,TitleComponent} from './StyledHeader'
import {useHistory} from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

const Header = (props) => {
	const history = useHistory()

	const goToBack = () => {
		history.goBack()
	}
	const logout = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('address')
		history.push('/')
	}
	return(
		<HeaderComponent>
			<ButtonComponent onClick={goToBack}><ArrowBackIosIcon/></ButtonComponent>
			<TitleComponent>{props.title ? props.title : '' }</TitleComponent>
			<p>{props.title ? <span onClick={logout}><MeetingRoomIcon/></span> : '' }</p>
		</HeaderComponent>
		)
}
export default Header