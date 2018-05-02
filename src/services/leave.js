import axios from './axios'

const getAllLeaves = () => {
    return axios.get('/leaves').then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

const getMyLeaves = (headers = DefaultHeaders) => {
    return axios.get('/me/leaves', {
        "headers": headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

const postLeave = (payload,headers = DefaultHeaders) => {
    return axios.post('/leaves',payload ,{
        "headers": headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}

const getPendingLeave = (headers = DefaultHeaders) => {
    return axios.get('/leaves/pending', {
        "headers": headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}
const confirmPendingLeave = (index, headers = DefaultHeaders) => {
    return axios.get('leaves/' + index + '/approve' ,{
        "headers": headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}
const rejectPendingLeave = (index, headers = DefaultHeaders) => {
    return axios.get('leaves/' + index + '/deny' ,{
        "headers": headers
    }).then((res) => {
        return res.data
    }).catch(error => {
        return error
    })
}
export default {
    getAllLeaves,
    getMyLeaves,
    postLeave,
    getPendingLeave,
    confirmPendingLeave,
    rejectPendingLeave
}