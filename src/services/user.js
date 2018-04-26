import axios,{DefaultHeaders}  from './axios'

const getMe = (headers=DefaultHeaders) => {
    return axios.get('/me',{
        "headers":headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}
const getAccessToken = ()=>{
    if(localStorage.getItem('token_type')&&localStorage.getItem('access_token')){
        return `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }
    return false
}

const getHeaders = ()=>{
    const token = getAccessToken();
      if (token) {
        const headers = {
          "Content-Type": "application/json",
          Authorization: token
        }
        return headers
    }
    return null
    
}

export default {
    getMe,
    getAccessToken,
    getHeaders
}