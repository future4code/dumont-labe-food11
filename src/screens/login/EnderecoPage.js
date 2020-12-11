import React,{useState} from 'react'
import AddAddress from '../../components/AddAddress/AddAddress'
import useInput from '../../hooks/useInput'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'

const EnderecoPage = () => {
const history = useHistory()
const [initalValue,setInitialValue] = useState('')
const [street,onChangeStreet] = useInput(initalValue)
const [number,onChangeNumber] = useInput(initalValue)
const [neighbourhood,onChangeNeighbourhood] = useInput(initalValue)
const [city,onChangeCity] = useInput(initalValue)
const [state,onChangeState] = useInput(initalValue)
const [complement,onChangeComplement] = useInput(initalValue)
const data = JSON.parse(localStorage.getItem('user'))
const token = data.token


const regsiterAddress = (event) => {
	if((street != '') && (number != '') && (neighbourhood != '') && (city != '') && (state != '')){
		const body = {
			street: street,
		    number: number,
		    neighbourhood: neighbourhood,
		    city: city,
		    state: state,
		    complement: complement
		}
		
		axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address',body,{
			headers:{
				auth:token
			}
		})
		.then((res) => {
			localStorage.setItem('user', JSON.stringify(res.data))
			Swal.fire({
				  position: 'top-end',
				  icon: 'success',
				  title: 'Endereço Cadastrado',
				  showConfirmButton: false,
				  timer: 2000
				})
			history.push('/perfil')
		})
		.catch((err) => {
			Swal.fire({
			  icon: 'error',
			  title: 'Oops...',
			  text: 'Ocorreu um erro ! Verifique os Dados preenchidos!',
			  footer: '<a href>Why do I have this issue?</a>'
			})
		})
	}else{
		Swal.fire(
		  'Dados Incompletos',
		  'Volte e Preencha os dados obrigatórios !',
		  'warning'
		)
	}

	event.preventDefault()
}
	const body = {
				    street: street,
				    number: number,
				    neighbourhood: neighbourhood,
				    city: city,
				    state: state,
				    complement: complement
				}
    return(
        <div>
            <AddAddress 
            	title="Meu Endereço"
            	street={street}
				number={number}
				neighbourhood={neighbourhood}
				city={city}
				state={state}
				complement={complement}
				onChangeStreet={onChangeStreet}
				onChangeNumber={onChangeNumber}
				onChangeNeighbourhood={onChangeNeighbourhood}
				onChangeCity={onChangeCity}
				onChangeState={onChangeState}
				onChangeComplement={onChangeComplement}
				regsiterAddress={regsiterAddress}
            />
        </div>
    )
}
export default EnderecoPage;