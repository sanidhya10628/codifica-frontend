import React, { useContext } from 'react'

import { AuthContext } from '../../Shared/context/auth-context'
import { useNavigate } from 'react-router-dom';
import { NotAuth } from '../../Shared/components/NotAuth';
// Code Editor


import { CodeEditor } from '../components/CodeEditor';

export const WriteEditorial = () => {
    const navigate = useNavigate()

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
