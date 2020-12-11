import React, {useState} from 'react';
import {TextField} from '@material-ui/core'
import {ContainerFormAddress,ButtonFormAddress,FormAddress,TitleAddress} from './StyledEditProfile'
import { makeStyles } from '@material-ui/core/styles';
import useInput from '../../hooks/useInput'
import axios from 'axios'
import Swal from 'sweetalert2';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

const EditProfile = (props) =>{
	const classes = useStyles();
	return(
		 <ContainerFormAddress>
            <FormAddress className={classes.root} noValidate autoComplete="off" onSubmit={props.saveProfile}>
            	<TextField
		          required
		          id="outlined-required"
		          label="Nome"
		          type="text"
		          defaultValue="Nome"
		          variant="outlined"
		          value={props.name}
		          onChange={props.onChangeName}
		        />
		  	   <TextField
		          required
		          id="outlined-required"
		          label="Email"
		          type="email"
		          defaultValue="Email."
		          variant="outlined"
		          value={props.email}
		          onChange={props.onChangeEmail}

		        />
		        <TextField
		          id="outlined-required"
		          label="CPF"
		          type="text"
		          defaultValue="CPF"
		          variant="outlined"
		          value={props.cpf}
		          onChange={props.onChangeCpf}
		          onKeyUp={props.regexCPF}
		        />
		       <ButtonFormAddress variant="contained" color="primary" type="submit">
				  Salvar
				</ButtonFormAddress> 
		    </FormAddress>
		</ContainerFormAddress>

		)
}
export default EditProfile