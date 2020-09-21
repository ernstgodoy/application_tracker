export const getRequest = () => {
  return(
    fetch(`/jobs`)
    .then((response) => {
      let json = response.json()
      return json
    })
  )
}

export const postRequest = (app) => {
  return(
    fetch(`/jobs`, {
      body: JSON.stringify(app),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      let json = response.json()
      return json
    })
  )
}

export const deleteRequest = (id) => {
  return(
    fetch(`/jobs/${id}`, {
      method: 'DELETE',
    })
  )
}

export const putRequest = (id) => {
  return(
    fetch(`/jobs/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: "PUT"
    })
    .then((response) => {
      let json = response.json()
      return json
    })
  )
}

