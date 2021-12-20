const URL = 'http://localhost:8000';

const headers = {
    "Authorization": localStorage.getItem('token'),
    "Content-type": "application/json",
}

// 1. 
export const isLoggedInAPI = () => fetch(`${URL}/isLoggedIn`, {
    method: 'GET',
    headers: headers
})


// 2.
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

// 3.
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

// 4.
export const Logout = () => fetch(`${URL}/logout`, {
    method: 'POST',
    headers: {
        "Authorization": localStorage.getItem('token'),
        "Content-type": "application/json",
    }
})


// 5.
export const editorials = () => fetch(`${URL}/editorials`, {
    method: 'GET',
})

// 6.
export const myEditorialsAPI = () => fetch(`${URL}/user/editorials`, {
    method: 'GET',
    headers: headers
})

// 7.
export const singleEditorialAPI = (id) => fetch(`${URL}/user/editorial/${id}`, {
    method: 'GET',
    headers: headers
})


// 8.
export const deleteEditorialAPI = (id) => fetch(`${URL}/user/write/editorial`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify({
        id
    }),
})











export const writeEditorialAPI = (problemLink,
    name,
    contestId,
    problemTags,
    difficultyLevel,
    editorialDesc,
    editorialCode,
    programmingLanguage,
    index
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
        index
    })
})


