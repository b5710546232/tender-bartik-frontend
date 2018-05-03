import Axios from "axios"
const baseURL = 'https://limitless-falls-39048.herokuapp.com/api'
// const baseURL = 'http://localhost/tender_bartik/public/api'

export const DefaultHeaders = {
  'Content-Type': 'application/json'
}

export default Axios.create({
  baseURL: baseURL,
})