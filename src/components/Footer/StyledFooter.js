import React from 'react'
import styled from 'styled-components'
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core'

export const ContainerFooter = styled(BottomNavigation)`
	width:100vw !important;
	position:fixed !important;
	bottom: 0 !important;
	left:0 !important;
	z-index:999999 !important;
`
export const IcomButton = styled(BottomNavigationAction)`
	&:focus{
			color:#5CB646;
			fil:#5CB646;
	}
`