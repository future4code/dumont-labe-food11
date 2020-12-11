import React, {useState,useEffect} from 'react'
import EditProfile from '../../components/EditProfile/EditProfile'
import useInput from '../../hooks/useInput'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';
import useGetProfile from '../../hooks/useGetProfile'

const EditarCadastro = () => {
	const [userRequest,cpfRequest,tokenRequest] = useGetProfile()
	const nameRequest = userRequest ? userRequest.name : 'Teste'
	const history = useHistory()
	const [name,onChangeName] = useInput(nameRequest)
	const [email,onChangeEmail] = useInput(userRequest.email)
	const [regexValue,setRegexValue] = useState(cpfRequest.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4"))
	const [cpf,onChangeCpf] = useInput(regexValue)

	
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
				auth:tokenRequest
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
            history.push('/perfil')
            
		})
		.catch((err) => {
			Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Verifique se os dados foram preenchidos corretamente!`
            })

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
	    setRegexValue(valueCpf)
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