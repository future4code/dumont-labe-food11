import React from 'react';
import {TextField,Button,InputLabel,OutlinedInput,InputAdornment,IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {DivInput,LogoImg,Title,FormSignupContent,ButtonForm,InputPassword,ContainerForm,LabelInput} from './StyledFormSignup'
import useInput from '../../hooks/useInput'
import Logo from '../../assets/LogoGrande.png'

const useStyles = makeStyles((theme) => ({
  const classes = useStyles();
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));
 const handleClickShowPassword = () => {
  const [name,onChangeName] = useInput()
  const [password,onChangePassword] = useInput()

    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

	

	const clear = (event) => {
		event.target.value = ''
	}
    return(
        <ContainerForm>
        	<LogoImg src={Logo} alt="FutureEats"/>
            <Title>Cadastrar</Title>
            <FormSignupContent className={classes.root} noValidate autoComplete="off">
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
		          defaultValue="email@email.com"
		          variant="outlined"
		          onFocus={clear}

		        />
		        <DivInput
		          required
		          id="outlined-required"
		          label="CPF"
		          type="text"
		          defaultValue="333.333.333-33"
		          variant="outlined"
		          onFocus={clear}
		        />
	
		        	<LabelInput htmlFor="outlined-adornment-password">Senha</LabelInput>
          <InputPassword
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            placeholder="Minimo 6 caracteres"
            onChange={onChangePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? 'd' : 'f'}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <LabelInput htmlFor="outlined-adornment-password">Confirmar</LabelInput>
          <InputPassword
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            placeholder="Confirme a senha anterior"
            onChange={onChangePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? 'd' : 'f'}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
		        
		        <ButtonForm variant="contained" color="primary">
				  Criar
				</ButtonForm>
            </FormSignupContent>
        </ContainerForm>
    )
}

export default FormSignup;