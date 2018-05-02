import axios from './axios'

const getSubordinate = (headers = DefaultHeaders) => {
    return axios.get('/me/subordinates', {
        "headers": headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

export default {
    getSubordinate
}