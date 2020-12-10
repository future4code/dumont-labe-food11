import React,{useState} from 'react'
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles'
import {ContainerFooter,IcomButton} from './StyledFooter'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100vw',
    },
  },
}));
 


const Footer = () => {
	const classes = useStyles()
	const history = useHistory()
	const [activeButton,setActiveButton] = useState(false)

	const goToHomePage = () => {
		history.push('/feed')
	}
	const goToProfile = () => {
		history.push('/perfil')
	}
	const goToCart = () => {
		history.push('/carrinho')
	}

	return(
			
				<ContainerFooter color='primary'  /* value={value}onChange={handleChangeNavigation}  */   className={classes.root}>
					  <IcomButton  onClick={goToHomePage} label="Inicio" value="inicio" icon={<HomeIcon/>}/>
					  <IcomButton onClick={goToCart} label="Favorites" value="favorites" icon={<ShoppingCartIcon/>}/>
					  <IcomButton onClick={goToProfile} label="Nearby" value="nearby" icon={<PersonIcon/>}/>
				</ContainerFooter>
		
			
		)
}
export default Footer