import React, {useState} from 'react';
import {InputAdornment,IconButton,Button,TextField} from '@material-ui/core';
import {Alert} from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles';
import useInput from '../../hooks/useInput'
import {Visibility,VisibilityOff} from '@material-ui/icons'
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
 

  	
const AddAddress = () => {
  const hitory = useHistory()
  const classes = useStyles();

    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off">
            	<TextField
		          required
		          id="outlined-required"
		          label="Nome"
		          type="text"
		          defaultValue="Nome e Sobrenome"
		          variant="outlined"
		        />
		  	   <TextField
		          required
		          id="outlined-required"
		          label="Email"
		          type="email"
		          defaultValue="email@email.com"
		          variant="outlined"

		        />
		        <TextField
		          required
		          id="outlined-required"
		          label="CPF"
		          type="text"
		          defaultValue="333.333.333-33"
		          variant="outlined"
		        />

        <Button variant="contained" color="primary" type="submit">
				  Criar
				</Button>
            </form>
        </div>


  )
  }
export default AddAddress;