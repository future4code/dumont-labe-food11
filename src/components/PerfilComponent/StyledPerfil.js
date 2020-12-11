import React from 'react'
import styled from 'styled-components'

export const ContainerPerfilComponent = styled.section`
	width:100vw;
`
export const ContainerPerfil = styled.div`
	width:100vw;
	box-sizing:border-box;
	padding: 0 10px;
	display:flex;
	justify-content:space-between;
	align-items:flex-start;
	background:${props => props.grey ? '#00000025' : '#fff'};
`
export const ContainerOrderHistory = styled.div`
	width:90%;
	border:1px solid #B8B8B8;
	display:flex;
	padding:10px;
	align-items:center;
	justify-content:flex-start;
	border-radius:5px;
	margin:10px auto;
`

export const ButtonEditar = styled.button`
	margin:20px;
	border:none;
	background:transparent;
	cursor:pointer;
	svg{
		fill:#000;
	}
	&:focus{
		outline:none;
	}
`
export const TextUserData = styled.p`
	font-weight:400;
	color:#000 ;
	font-size:20px;
	line-height:10px;
`
export const TitleUserData = styled.h2`
	font-weight:500;
	color:#B8B8B8 ;
	font-size:20px;
	line-height:10px;
`
export const PriceOrderHistory = styled.h2`
	font-weight:600;
	color:#000 ;
	font-size:20px;
	line-height:10px;
`
export const TitleOrderHistory = styled.h3`
	font-weight:500;
	color:#5CB646 ;
	font-size:20px;
	line-height:0px;
`
export const TitleOrderHistoryComponent = styled.h2`
	display:block;
	width:95%;
	border-bottom:1px solid #000000;
	font-size:20px;
	padding:10px 0;
	margin:5px auto;
	font-weight:600;
`