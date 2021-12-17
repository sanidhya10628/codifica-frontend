import axios from "axios";

// const API = axios.create({
//     baseURL: 'http://localhost:8000'
// })

// const config = {
//     headers: {
//         Authorization: localStorage.getItem('token'),

//     }
// };

// const bodyParameters = {
//     key: "value"
// };

// API.defaults.headers.common['Authorization'] = localStorage.getItem('token')

const URL = 'http://localhost:8000';

const headers = {
    "Authorization": localStorage.getItem('token'),
    "Content-type": "application/json",
}


export const isLoggedInAPI = () => fetch(`${URL}/isLoggedIn`, {
    method: 'GET',
    headers: headers
})



export const signUp = (codeforcesHandle, email, password) => fetch(`${URL}/signup`, {
    method: 'POST',
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        email: email,
        password: password,
        codeforcesHandle: codeforcesHandle
    }),
})

export const LoginIn = (email, password) => fetch(`${URL}/login`, {
    method: 'POST',
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        email,
        password,
    }),
})


export const Logout = () => fetch(`${URL}/logout`, {
    method: 'POST',
    headers: {
        "Authorization": localStorage.getItem('token'),
        "Content-type": "application/json",
    }
})



export const editorials = () => fetch(`${URL}/editorials`, {
    method: 'GET',
})

export const myEditorialsAPI = () => fetch(`${URL}/user/editorials`, {
    method: 'POST',
    headers: headers
})


// export const singleEditorialAPI = () => 













export const writeEditorialAPI = (problemLink,
    name,
    contestId,
    problemTags,
    difficultyLevel,
    editorialDesc,
    editorialCode,
    programmingLanguage,
) => fetch(`${URL}/user/write/editorial`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
        problemLink,
        name,
        contestId,
        problemTags,
        difficultyLevel,
        editorialDesc,
        editorialCode,
        programmingLanguage,
    })
})


