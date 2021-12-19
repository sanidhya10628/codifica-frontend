import React, { useContext } from 'react'

// Import Components
import { AuthContext } from '../../Shared/context/auth-context'
import { NotAuth } from '../../Shared/components/NotAuth';
import { CodeEditor } from '../components/CodeEditor';

export const WriteEditorial = () => {


    const { isLoggedIn } = useContext(AuthContext)
    if (isLoggedIn) {
        return (
            <CodeEditor />
        )
    }

    return (
        <NotAuth />
    )
}
