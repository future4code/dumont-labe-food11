import React, {useState} from 'react';
import axios from 'axios';
import baseUrl from '../../constants/baseUrl'
import {TextField, Button, AppBar} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FormContainer, LoginPageContainer, Img } from './styles';
import logo from '../../assets/logo.png'


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
 
  const handleLogin = async (event) => {
      event.preventDefault();
      const body = {
          email: email,
          password: password,
      }

      try{

     const response = await axios.post(`${baseUrl}/login`, body);
    

     localStorage.setItem("token", response.data.token );
     
     history.push("/feed")

      }catch(error){
          alert("tente novamente")
          console.error(error);
      }
  }

    return(
        
        <LoginPageContainer>
            
            <Img src={logo.png} />
            <FormContainer onSubmit={handleLogin} >
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    onChange={handleUpdateEmail}
                    value={email}
                   
                />
                <TextField  
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