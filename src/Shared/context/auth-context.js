import React, { createContext, useState, useEffect } from "react";

import { isLoggedInAPI } from '../API/api'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined)


    const getIsLoggedIn = async () => {
        const { data } = await isLoggedInAPI()
        setIsLoggedIn(data.isLoggedIn)
    }


    useEffect(() => {
        getIsLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{
            isLoggedIn, setIsLoggedIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }