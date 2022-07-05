import React, { createContext, useState, useEffect } from "react";

import axios from 'axios'

// import { isLoggedInAPI } from '../API/api'
import { Loading } from '../components/Loading'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [cFHandle, setCFHandle] = useState('')
    const [loading, setLoading] = useState(true)

    const [toastDetails, setToastDetails] = useState({
        isShowToast: false,
        toastType: 'error'
    })
    const getIsLoggedIn = async () => {
        // const response = await isLoggedInAPI()
        // const data = await response.json()
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/isLoggedIn`, config)
        if (data['status'] === 'OK') {
            setCFHandle(data.user.codeforcesHandle)
            setEmail(data.user.email)
        }
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
            toastDetails, setToastDetails
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }