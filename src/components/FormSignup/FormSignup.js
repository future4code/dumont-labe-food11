import React from 'react';
import {TextField,Button,InputLabel,OutlinedInput,InputAdornment,IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {DivInput,Title,ButtonForm,InputPassword,LabelInput} from './StyledFormSignup'
import useInput from '../../hooks/useInput'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

const FormSignup = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

	const classes = useStyles();
	const [name,onChangeName] = useInput()

	const clear = (event) => {
		event.target.value = ''
	}
    return(
        <div>
        	<img src='' alt="FutureEats"/>
            <Title>Cadastrar</Title>
            <form className={classes.root} noValidate autoComplete="off">
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
            value={values.password}
            placeholder="Minimo 6 caracteres"
            onChange={handleChange('password')}
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
            value={values.password}
            placeholder="Confirme a senha anterior"
            onChange={handleChange('password')}
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
            </form>
        </div>
    )
}

export default FormSignup;