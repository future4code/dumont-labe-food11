import React from 'react'
import {HeaderComponent,ButtonComponent,TitleComponent} from './StyledHeader'
import {useHistory} from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const Header = (props) => {
	const history = useHistory()

	const goToBack = () => {
		history.goBack()
	}
	return(
		<HeaderComponent>
			<ButtonComponent onClick={goToBack}><ArrowBackIosIcon/></ButtonComponent>
			<TitleComponent>{props.title ? props.title : '' }</TitleComponent>
			<p></p>
		</HeaderComponent>
		)
}
export default Header