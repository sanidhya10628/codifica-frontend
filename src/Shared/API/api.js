const URL = 'https://sanidhya-codifica.herokuapp.com';

const headers = {
    'Content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem("token")}`
}

// 1. Done
export const isLoggedInAPI = () => fetch(`${URL}/isLoggedIn`, {
    method: 'GET',
    headers: headers
})


// 2. Done
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

// 3. Done
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

// 4. Done
export const Logout = () => fetch(`${URL}/logout`, {
    method: 'POST',
    headers: headers
})


// 5. Done
export const editorials = () => fetch(`${URL}/editorials`, {
    method: 'GET',
})

// 6. Done
export const myEditorialsAPI = () => fetch(`${URL}/user/editorials`, {
    method: 'GET',
    headers: headers
})

// 7. Done
export const singleEditorialAPI = (id) => fetch(`${URL}/user/editorial/${id}`, {
    method: 'GET',
    headers: headers
})


// 8. Done
export const deleteEditorialAPI = (id) => fetch(`${URL}/user/write/editorial`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify({
        id
    }),
})

// 9. Done

export const editEditorialAPI = (id, editorialDesc, editorialCode) => fetch(`${URL}/user/write/editorial`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
        id,
        editorialDesc,
        editorialCode
    }),
})








// 10. Done

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


