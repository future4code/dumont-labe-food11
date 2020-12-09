import React,{useEffect} from 'react';
import Logo from '../../assets/LogoInicio.png'
import {ContainerInicio,ImgInicio} from './styleInicio'
import {useHistory} from 'react-router-dom'

const InicioPage = () => {
	const history = useHistory()
	const token = localStorage.getItem('token')
	useEffect(()=>{
		setTimeout(() => {
			if(token){
				history.push('/feed')
			}else{
				history.push('/login')
			}
		},3000)
	},[])
    return (
        <ContainerInicio>
            <ImgInicio src={Logo} alt="logo"/> 
        </ContainerInicio>
    );
}

export default InicioPage