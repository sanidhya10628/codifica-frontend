import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8000'
})


export const isLoggedInAPI = () => API.get('/isLoggedIn', {
    headers: {
        'Authorization': localStorage.getItem('token')
    }
})



export const signUp = (codeforcesHandle, email, password) => API.post('/signup', {
    codeforcesHandle,
    email,
    password
})

export const LoginIn = (email, password) => API.post('/login', {
    email,
    password
})



export const editorials = () => API.get('/editorials')