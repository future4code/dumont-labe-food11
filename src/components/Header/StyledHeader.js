import React from 'react'
import styled from 'styled-components'

export const HeaderComponent = styled.header`
	width:100vw;
	background:#fff;
	position:fixed;
	top:0;
	left:0;
	height:40px;
	border-bottom:1px solid #ddd;
	display:flex;
	justify-content:space-between;
	align-items:center;
	box-sizing:border-box;
	padding:0 10px;
`
export const ButtonComponent = styled.button`
	background:transparent;
	border:none;
	cursor:pointer;
	&:focus{
		outline:none;
	}
`
export const TitleComponent = styled.h1`
	font-size:18px;
	color:#000;
	text-align:center;
`