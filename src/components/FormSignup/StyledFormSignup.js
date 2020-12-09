import react from 'react'
import styled from 'styled-components'
import {TextField,Button,OutlinedInput,InputLabel} from '@material-ui/core';

export const ContainerForm = styled.section`
	display:flex;
	align-items:center;
	flex-direction:column;
	height:100%;
`;
export const LogoImg = styled.img`
	display:block;
	margin:10px auto 0;
	width:30%;
	height:auto;
`;
export const FormSignupContent = styled.form`
	display:flex;
	align-items:center;
	flex-direction:column;
	width:100%;
`;
export const DivInput = styled(TextField)`
	input{
		color:rgb(133, 133, 133);
	}
`;

export const Title = styled.h2`
	font-size:20px;
	text-align:center;
`;
export const ButtonForm = styled(Button)`
	width:90% !important;
	height:40px !important;
	text-transform: none !important;
	color:#000;
	font-weight:600 !important;
	font-size:16px;
	background:#5cb646 !important;
`;
export const InputPassword = styled(OutlinedInput)`
	width:90% !important;
	margin-bottom: 10px !important;
`;
export const LabelInput = styled(InputLabel)`
	position:relative !important;
	margin:10px auto -10px 7% !important;
	background:#fff !important;
	z-index:9999 !important;
	padding:0 10px !important;
`;