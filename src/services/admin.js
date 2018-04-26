import axios,{DefaultHeaders}  from './axios'

const registerUser = (payload,headers=DefaultHeaders) => {
    return axios.post('/register',payload,{
        "headers":headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

export default {
    registerUser
}