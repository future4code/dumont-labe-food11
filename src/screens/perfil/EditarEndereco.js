import React,{useState} from 'react'
import AddAddress from '../../components/AddAddress/AddAddress'
import useInput from '../../hooks/useInput'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'

const EditarEndereco = (props) => {
const history = useHistory()
const address = JSON.parse(localStorage.getItem('address'))
const [street,onChangeStreet] = useInput(address.street)
const [number,onChangeNumber] = useInput(address.number)
const [neighbourhood,onChangeNeighbourhood] = useInput(address.neighbourhood)
const [city,onChangeCity] = useInput(address.city)
const [state,onChangeState] = useInput(address.state)
const [complement,onChangeComplement] = useInput(address.complement)
const data = JSON.parse(localStorage.getItem('user'))
const token = data.token


const regsiterAddress = (event) => {
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
			  title: 'Endereço Atualizado',
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

	event.preventDefault()
}
    return(
        <div>
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
				editar={true}
            />
        </div>
        </div>
    )
}
export default EditarEndereco;