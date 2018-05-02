import axios,{DefaultHeaders}  from './axios'
import Store from '../stores/'

const getMe = (headers=DefaultHeaders) => {
    return axios.get('/me',{
        "headers":headers
    }).then((res) => {
        Store.User = res.data
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

const fetchMe = (headers=getHeaders())=>{
    return getMe(headers).then(res=>{
        Store.User = res
        return res
    }).catch(err=>{
        console.error(err)
    })
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
    getHeaders,
    fetchMe
}