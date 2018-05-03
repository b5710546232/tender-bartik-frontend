import axios, { DefaultHeaders } from './axios'
import Store from '../stores/'

const getMe = (headers = DefaultHeaders) => {
    return axios.get('/me', {
        "headers": headers
    }).then((res) => {
        Store.User = res.data
        return res.data
    }).catch(error => {
        return error
    })
}
const getAccessToken = () => {
    if (localStorage.getItem('token_type') && localStorage.getItem('access_token')) {
        return `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }
    return false
}

const getAllUser = () =>{
    const config = {
        headers: {
            'Authorization': getAccessToken()
        }
    }
    return axios.get('/users',config).then((res) => {
        return res.data
    }).catch(error => {
        return error
    });
}


const getSupervisor = () =>{
    const config = {
        headers: {
            'Authorization': getAccessToken()
        }
    }
    return axios.get('/users/supervisors',config).then((res) => {
        return res.data
    }).catch(error => {
        return error
    });
}

const updateUserByID = (payload) => {
    const config = {
        headers: {
            'Authorization': getAccessToken()
        }
    }
    const url = `/users/1`
    return axios.put(url, payload, config).then((res) => {
        return res.data
    }).catch(error => {
        return error
    });
}

const adminUpdateUserByID = (id,payload)=>{
    const config = {
        headers: {
            'Authorization': getAccessToken()
        }
    }
    const url = `/users/${id}`
    return axios.put(url, payload, config).then((res) => {
        return res.data
    }).catch(error => {
        return error
    });
}

const fetchMe = (headers = getHeaders()) => {
    return getMe(headers).then(res => {
        Store.User = res
        return res
    }).catch(err => {
        console.error(err)
    })
}


const getHeaders = () => {
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

const uploadProfile = (file, name = 'images') => {
    const url = "/me/upload_image"
    if (typeof url !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof url}`);
    }
    // You can add checks to ensure the url is valid, if you wish
    // 'content-type': 'multipart/form-data'
    const formData = new FormData();
    formData.append(name, file);
    const config = {
        headers: {
            'Authorization': getAccessToken(),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    return axios.post(url, formData, config);
};

const getOTP = () => {
    const config = {
        headers: {
            'Authorization': getAccessToken(),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    return axios.get('/opt',config).then(res =>{
        console.log(res.data);
        return res.data;
    }).catch(err => {
        console.error(err);
        alert("error");
    });
};

export default {
    getMe,
    getAccessToken,
    getHeaders,
    fetchMe,
    uploadProfile,
    updateUserByID,
    getAllUser,
    adminUpdateUserByID,
    getSupervisor,
    getOTP
}