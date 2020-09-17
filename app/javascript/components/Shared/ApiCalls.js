const getRequest = (hook) => {
  return(
    fetch(`/jobs`)
    .then((response) => response.json())
    .then((data) => hook(data))
  )
}

export default getRequest
