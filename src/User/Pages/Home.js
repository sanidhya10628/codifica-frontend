import React, { useContext } from 'react'

import { AuthContext } from '../../Shared/context/auth-context'



export const Home = () => {



    const { isLoggedIn, email, cFHandle, loading, setLoading } = useContext(AuthContext)

    if (loading) {
        return (
            <div>
                Loading
            </div>
        )
    }
    return (
        <div>
            {
                isLoggedIn ? (
                    <h1>Welcome {cFHandle}!.. You are Logged IN!....</h1>
                ) : (
                    <h1>Home Page</h1>
                )
            }

        </div>
    )
}
