import react from 'react'
import styled from 'styled-components'
import {TextField,Button,OutlinedInput,InputLabel} from '@material-ui/core';

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
	text-align:left !important;
	width:70px !important;
	margin:10px 0 -7px 7% !important;
	background-color:#fff !important;
	position:relative !important;
	padding-left:10px !important;
	opacity:1 !important;
	font-size:14px !important;
	z-index:9999 !important;
`;