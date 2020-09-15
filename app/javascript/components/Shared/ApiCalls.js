const getRequest = (hook) => {
  return(
    fetch(`http://localhost:3000/jobs`)
    .then((response) => response.json())
    .then((data) => hook(data))
  )
}

export default getRequest
