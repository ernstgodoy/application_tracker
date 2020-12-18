import { useState } from 'react'

const useForm = (defaultValues, submitCallback) => {
  const [values, setValues] = useState(defaultValues)

  const handleSubmit = (e) => {
    e.preventDefault()
    submitCallback() 
  }
  
  const handleChange = (e) => {
    e.persist()
    console.log(e.target.value)
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  }
  return [values, handleChange, handleSubmit]
}

export default useForm