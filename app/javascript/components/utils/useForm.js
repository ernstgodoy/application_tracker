import { useState } from 'react'

const useForm = (defaultValues, submitCallback) => {
  const [values, setValues] = useState(defaultValues)

  const handleSubmit = (e) => {
    console.log('handle submit')
    e.preventDefault()
    submitCallback()
    
  }
  
  const handleChange = (e) => {
    e.persist()
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    console.log(values)
  }

  return [values, handleChange, handleSubmit]

}

export default useForm