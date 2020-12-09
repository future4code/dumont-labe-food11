import React, {useState} from 'react';
import {InputAdornment,IconButton} from '@material-ui/core';
import {Alert} from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles';
import {DivInput,LogoImg,Title,FormSignupContent,ButtonForm,InputPassword,ContainerForm,LabelInput} from './StyledFormSignup'
import useInput from '../../hooks/useInput'
import Logo from '../../assets/LogoGrande.png'
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
 

  	
const FormSignup = () => {
  const hitory = useHistory()
  const classes = useStyles();
  const [initialValue,setInitialValue] = useState('')
  const [name,onChangeName] = useInput(initialValue)
  const [email,onChangeEmail] = useInput(initialValue)
  const [cpf,onChangeCpf] = useInput(initialValue)
  const [password,onChangePassword] = useInput(initialValue)
  const [passwordConfirm,onChangePasswordConfirm] = useInput(initialValue)

    const [showPassword, setsShowPassword] = useState(false)
    const [confirm,setConfirm] = useState(true)

  const handleClickShowPassword = () => {
    setsShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const clear = (event) => {
		event.target.value = ''
	}
  const confirmaSenha = () => {
    if(password != passwordConfirm){
      setConfirm(false)
    }else if(password === passwordConfirm){
      setConfirm(true)
    }
  }
  const cadastrar = (event) => {
    if(confirm){
      const body = {
          name: name,
          email: email,
          cpf: cpf,
          password: password
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup',body)
        .then((res) => {
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Você está cadastrado !',
              showConfirmButton: false,
              timer: 2000
            })
            localStorage.setItem('token', res.data.token)
            hitory.push('/feed')         
        })
        .catch((err) => {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Houve um erro `
            })
        })
      }else{
           Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Verifique os campos digitados !`
            })

      }
    

    
    setInitialValue('')
    event.preventDefault()
  }

  const regexCPF = (event) => {
    event.target.maxLength = 14
    let valueCpf = event.target.value
    valueCpf = valueCpf.replace(/\D/g,"")
    valueCpf = valueCpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")
    event.target.value = valueCpf
  }

 
    return(
        <ContainerForm>
        	<LogoImg src={Logo} alt="FutureEats"/>
            <Title>Cadastrar</Title>
            <FormSignupContent className={classes.root} noValidate autoComplete="off" onSubmit={cadastrar}>
            	<DivInput
		          required
		          id="outlined-required"
		          label="Nome"
		          type="text"
		          value={name}
		          onChange={onChangeName}
		          defaultValue="Nome e Sobrenome"
		          variant="outlined"
		          onFocus={clear}
		        />
		  	   <DivInput
		          required
		          id="outlined-required"
		          label="Email"
		          type="email"
              value={email}
              onChange={onChangeEmail}
		          defaultValue="email@email.com"
		          variant="outlined"
		          onFocus={clear}

		        />
		        <DivInput
		          required
		          id="outlined-required"
		          label="CPF"
              value={cpf}
              onChange={onChangeCpf}
              onKeyUp={regexCPF}
		          type="text"
		          defaultValue="333.333.333-33"
		          variant="outlined"
		          onFocus={clear}
		        />

          <LabelInput htmlFor="outlined-adornment-password">Senha</LabelInput>
          <InputPassword
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={onChangePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <LabelInput htmlFor="outlined-adornment-password">Confirmar</LabelInput>
          <InputPassword 
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={passwordConfirm}
            onKeyUp={confirmaSenha}
            color={confirm ? 'primary' : 'secondary'}
            onChange={onChangePasswordConfirm}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          {confirm ? '' : <Alert severity="error">Senha não confere</Alert>}

		        <ButtonForm variant="contained" color="primary" type="submit">
				  Criar
				</ButtonForm>
            </FormSignupContent>
        </ContainerForm>


  )
  }
export default FormSignup;