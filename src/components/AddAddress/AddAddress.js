import React, {useState} from 'react';
import {InputAdornment,IconButton,Button,TextField} from '@material-ui/core';
import {Alert} from '@material-ui/lab'
import {ContainerFormAddress,ButtonFormAddress,FormAddress,TitleAddress} from './StyledFormAddress'
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
 

  	
const AddAddress = (props) => {
  const hitory = useHistory()
  const classes = useStyles();

    return(
        <ContainerFormAddress>
            <TitleAddress>{props.title}</TitleAddress>
            <FormAddress className={classes.root} noValidate autoComplete="off" onSubmit={props.regsiterAddress}>
            	<TextField
		          required
		          id="outlined-required"
		          label="Logradouro"
		          type="text"
		          defaultValue="Rua/Av."
		          variant="outlined"
              value={props.street}
              onChange={props.onChangeStreet}
		        />
		  	   <TextField
		          required
		          id="outlined-required"
		          label="Número"
		          type="number"
		          defaultValue="Número."
		          variant="outlined"
              value={props.number}
              onChange={props.onChangeNumber}

		        />
		        <TextField
		          id="outlined-required"
		          label="Complemento"
		          type="text"
		          defaultValue={props.editar ? '' : 'Apto./Bloco.'}
		          variant="outlined"
              value={props.complement}
              onChange={props.onChangeComplement}
		        />
            <TextField
              required
              id="outlined-required"
              label="Bairro"
              type="text"
              defaultValue="Bairro"
              variant="outlined"
              value={props.neighbourhood}
              onChange={props.onChangeNeighbourhood}
            />
            <TextField
              required
              id="outlined-required"
              label="Cidade"
              type="text"
              defaultValue="Cidade"
              variant="outlined"
              value={props.city}
              onChange={props.onChangeCity}
            />
            <TextField
              required
              id="outlined-required"
              label="Estado"
              type="text"
              defaultValue="Estado"
              variant="outlined"
              value={props.state}
              onChange={props.onChangeState}
            />

        <ButtonFormAddress variant="contained" color="primary" type="submit">
				  Salvar
				</ButtonFormAddress>
            </FormAddress>
        </ContainerFormAddress>


  )
  }
export default AddAddress;