export const getRequest = () => {
  return fetch(`/jobs`, {
    method: "GET"
  })
  .then(response => response.json())
  .catch(err => err)
}

export const getByIdRequest = (id) => {
  return fetch(`/jobs/${id}`, {
    method: "GET"
  })
  .then(response => response.json())
  .catch(err => err)
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
    .catch(err => err)
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
    .catch(err => err)
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
    .catch(err => err)
}

export const getMetrics = () => {
  return Promise.all([
    fetch("/jobs").then(res => res.json()),
    fetch("/roles_count").then(res => res.json()),
    fetch("/status_metrics").then(res => res.json())
  ])
  .then(([jobs, roles, statuses]) => {
    let response = new Object({
      jobs: jobs,
      roles_count: roles, 
      status_count: statuses
    })
    return response
  })
  .catch(err => err)
}