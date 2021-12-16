import React, { useContext } from 'react'

import { AuthContext } from '../../Shared/context/auth-context'

import { useLocation } from 'react-router-dom'

export const Home = () => {
    // const location = useLocation()
    // console.log(location.state)
    // console.log(state);


    // const { isLoggedIn } = useContext(AuthContext)

    return (
        <div>
            {/* {
                isLoggedIn ? (
                    <h1>Welcome you are logged IN!....</h1>
                ) : (
                    <h1>Home Page</h1>
                )
            } */}
            <h1>Home Page</h1>
        </div>
    )
}
