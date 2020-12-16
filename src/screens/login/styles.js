import styled from "styled-components"
import {TextField, Button, AppBar} from '@material-ui/core';

export const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height: 100vh;
    width: 100vw;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width:90%;
    height:100%;
    justify-content: center;
    align-items:center;
`

export const Img = styled.img`
    margin-top: 50px;
    height: 80px;
    padding: 40px;
`
export const TextInputs = styled(TextField)`
    margin:10px 0;
`