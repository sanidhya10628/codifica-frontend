import React, { createContext, useState, useEffect } from "react";

import { isLoggedInAPI } from '../API/api'


const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [cFHandle, setCFHandle] = useState('')


    const getIsLoggedIn = async () => {
        const { data } = await isLoggedInAPI()
        setIsLoggedIn(data.isLoggedIn)
        setIsLoading(false)
    }


    useEffect(() => {
        getIsLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            email, setEmail,
            cFHandle, setCFHandle,
            isLoading, setIsLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }