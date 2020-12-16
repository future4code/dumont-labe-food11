import React, {useState,useEffect} from 'react'
import EditProfile from '../../components/EditProfile/EditProfile'
import useInput from '../../hooks/useInput'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';
import useGetProfile from '../../hooks/useGetProfile'

const EditarCadastro = () => {
	const data = JSON.parse(localStorage.getItem('user'))
	const user = data.user
	const token = data.token
	const history = useHistory()
	const [name,onChangeName] = useInput(user.name)
	const [email,onChangeEmail] = useInput(user.email)
	const [cpf,onChangeCpf] = useInput(user.cpf)

	
	const saveProfile = (event) =>{
		if(cpf.length === 11 ){
			console.log(cpf,cpf.length)
			const body = {
							name:name,
							email:email,
							cpf:cpf
						}
		axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile',body,{
			headers:{
				auth:token
			}
		})
		.then((res) => {
			Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Seus Dados foram atualizados !',
              showConfirmButton: false,
              timer: 2000
            })
            
            const userData = {
            	token:token,
            	user: res.data
            }
            localStorage.setItem('user',JSON.stringify(userData))
            history.push('/perfil')
            
		})
		.catch((err) => {
			Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Verifique se os dados foram preenchidos corretamente!`
            })
            console.log(err.message)

		})
		}else{
			Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Digite o Cpf corretamente`
            })
		}
		event.preventDefault()
	}

	const regexCPF = (event) => {
	    event.target.maxLength = 11
	    let valueCpf = event.target.value
	    valueCpf = valueCpf.replace(/\D/g,"")
	    valueCpf = valueCpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")
	    event.target.value = valueCpf
 	 }
    return(
        <div>
            <EditProfile
            	name={name}
				onChangeName={onChangeName}
				email={email}
				onChangeEmail={onChangeEmail}
				cpf={cpf}
				onChangeCpf={onChangeCpf}
				saveProfile={saveProfile}
				regexCPF={regexCPF}
            />
        </div>
    )
}
export default EditarCadastro;