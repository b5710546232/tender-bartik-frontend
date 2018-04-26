import axios,{DefaultHeaders}  from './axios'

const getAllTask = () => {
    return axios.get('/tasks').then((res) => {
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

export default {
    getAllTask,
    getMyTask
}