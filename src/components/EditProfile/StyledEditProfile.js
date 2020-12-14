import react from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core';

export const ContainerFormAddress = styled.section`
	width:100vw;
	height:100vh;
	display:flex;
	justify-content:flex-start;
	align-items:center;
	flex-direction:column;
`
export const FormAddress = styled.form`
	width:90%;
	margin:0 auto;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
`
export const ButtonFormAddress = styled(Button)`
	width:90% !important;
	margin:10px auto !important;
`
export const TitleAddress = styled.h2`
	text-align:center;
	font-size:20px;
`