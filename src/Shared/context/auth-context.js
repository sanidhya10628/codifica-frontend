import React, { createContext, useState, useEffect } from "react";

import { isLoggedInAPI } from '../API/api'


const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined)

    const [email, setEmail] = useState('')
    const [cFHandle, setCFHandle] = useState('')


    const getIsLoggedIn = async () => {
        const response = await isLoggedInAPI()
        const data = await response.json()
        setIsLoggedIn(data.isLoggedIn)
    }


    useEffect(() => {
        getIsLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            email, setEmail,
            cFHandle, setCFHandle,

        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }