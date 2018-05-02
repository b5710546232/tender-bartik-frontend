import axios,{DefaultHeaders}  from './axios'

const getAllTask = (headers=DefaultHeaders) => {
    return axios.get('/tasks', {
        "headers":headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

const getMyTask = (headers=DefaultHeaders) =>{
    return axios.get('/me/tasks',{
        "headers":headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

const postTask = (payload,headers = DefaultHeaders) => {
    return axios.post('/tasks',payload ,{
        "headers": headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

export default {
    getAllTask,
    getMyTask,
    postTask
}