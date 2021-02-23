export const getRequest = (role) => {
  let url = `/jobs`
  if (role) {
    url += `?role=${role}`
  }
  return fetch(url, {
    method: "GET"
  })
  .then(response => response.json())
}

export const getByIdRequest = (id) => {
  return fetch(`/jobs/${id}`, {
    method: "GET"
  })
  .then(response => response.json())
}

export const postRequest = (app, token) => {
  return fetch(`/jobs`, {
      body: JSON.stringify(app),
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': token
      }
    })
    .then(response => response)
}

export const deleteRequest = (id, token) => {
  return fetch(`/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'X-CSRF-TOKEN': token
      }
    })
    .then(response => response)
}

export const putRequest = (id, app, token) => {
  return fetch(`/jobs/${id}`, {
      body: JSON.stringify(app),
      method: "PUT",
      headers: { 
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': token
      },
    })
    .then(response => response)
}

export const getRoles = () => {
  return fetch(`/roles`)
    .then( res => res.json())
}