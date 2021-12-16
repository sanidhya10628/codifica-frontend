import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { Link } from 'react-router-dom';
export const NotAuth = () => {
    return (
        <Alert severity="warning" sx={{
            fontSize: '26px'
        }}>
            <AlertTitle style={{
                fontSize: '26px'
            }}>Warning
            </AlertTitle>
            Please Login to view this Page — <strong>
                <Link to='/login' style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>Login</Link>
            </strong>
        </Alert>
    )
}
