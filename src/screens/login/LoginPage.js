import React, {useState} from 'react';
import axios from 'axios';
import baseUrl from '../../constants/baseUrl'
import {TextField, Button, AppBar} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FormContainer,TextInputs, LoginPageContainer, Img } from './styles';
import logo from '../../assets/logo.png'
import Swal from 'sweetalert2';



const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleGoToSignup = () => {
      history.push("/signup")
  }

  const handleUpdateEmail = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
  }

  const handleUpdatePassword = (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
  }
 
  const handleLogin = (event) => {
      const body = {
          email: email,
          password: password,
      }
      axios.post(`https://us-central1-missao-newton.cloudfunctions.net/FutureEatsA/login`, body)
      .then((res) => {
        localStorage.setItem("user", res.data );
         history.push("/feed")

      })
      .catch((error) => {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Houve um erro verifique os dados preenchidos ! `
            })
          console.log(error.message);
      }) 
      event.preventDefault();   
  
  }

    return(
        
        <LoginPageContainer>
            
            <Img src={logo.png} />
            <FormContainer onSubmit={handleLogin} >
                <TextInputs 
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    onChange={handleUpdateEmail}
                    value={email}
                   
                />
                <TextInputs  
                    label="Senha"
                    variant="outlined"                
                    type="password"
                    name="password"
                    onChange={handleUpdatePassword}
                    value={password}
                 
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    
                >
                    Login
                </Button>
            </FormContainer>
            <Button
                color="primary"
                onClick={handleGoToSignup}
            >
                Não tem Login? Clique aqui
            </Button>
        </LoginPageContainer>
       
    )
}

export default LoginPage;