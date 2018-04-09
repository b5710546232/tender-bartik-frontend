import axios from './axios'

const getAllTask = () => {
    return axios.get('/tasks').then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

export default {
    getAllTask
}