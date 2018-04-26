import axios from './axios'

const getAllLeaves = () => {
    return axios.get('/leaves').then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

const getMyLeaves = (headers=DefaultHeaders) =>{
    return axios.get('/me/leaves',{
        "headers":headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

export default {
    getAllLeaves,
    getMyLeaves
}