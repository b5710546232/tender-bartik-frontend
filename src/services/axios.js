import Axios from "axios"
const baseURL = 'http://localhost/tender_bartik/public/api'

export const DefaultHeaders = {
  'Content-Type': 'application/json'
}

export default Axios.create({
  baseURL: baseURL,
})