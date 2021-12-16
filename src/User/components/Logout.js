import React, { useContext } from 'react'

import { AuthContext } from '../../Shared/context/auth-context'

export const Logout = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    return (
        <div>

        </div>
    )
}
