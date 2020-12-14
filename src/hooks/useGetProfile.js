import React,{useState} from 'react'
import axios from 'axios'

const useGetProfile = () => {
		const data = JSON.parse(localStorage.getItem('user'))
		const token = data ? data.token : ''
		const [ user,setUser ] = useState({})
		const [cpf,setCpf] = useState('')
		const [tokenRequest,setTokenRequest] = useState('')
		axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile',{
			headers:{
				auth: token
			}
		})
		.then((res) => {
			setTokenRequest(res.data.token)
			setUser(res.data.user)
			let valueCpf = res.data.user.cpf
			valueCpf = valueCpf.replace(/\D/g,"")
			valueCpf = valueCpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")
			setCpf(valueCpf)
		})
		.catch((err) => {
			console.log(err)
		})
		return [user,cpf,tokenRequest]
}
export default useGetProfile