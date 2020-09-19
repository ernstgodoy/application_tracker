const getCurrentDate = () => {
  let date = new Date()
  let month = date.getMonth
  let day = date.getDate
  let year = date.getFullYear
  let today = `${month} ${day} ${year}`
  return today
}

export default getCurrentDate
