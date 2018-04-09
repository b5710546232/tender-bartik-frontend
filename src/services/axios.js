import Axios from "axios"
const baseURL = 'https://limitless-falls-39048.herokuapp.com/api'
export default Axios.create({
  baseURL: baseURL,
})