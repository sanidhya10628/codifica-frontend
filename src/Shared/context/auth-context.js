import React, { createContext, useState, useEffect } from "react";

import { isLoggedInAPI } from '../API/api'
import { Loading } from '../components/Loading'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [cFHandle, setCFHandle] = useState('')


    const getIsLoggedIn = async () => {
        const response = await isLoggedInAPI()
        const data = await response.json()
        setCFHandle(data.user.codeforcesHandle)
        setEmail(data.user.email)
        setIsLoggedIn(data.isLoggedIn)

        setLoading(false)
    }


    useEffect(() => {
        getIsLoggedIn()
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }
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