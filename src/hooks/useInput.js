import react,{useState} from 'react'

const useInput = (initialValue) => {
	const [value,setValue] = useState(initialValue)
	const onChangeInput = (event) => {
		setValue(event.target.value)
	}

	return [value,onChangeInput]
}
export default useInput