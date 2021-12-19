import React from 'react'

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth-context'

export const NoEditorial = () => {
    const { isLoggedIn } = React.useContext(AuthContext)

    return (
        <Container maxWidth="lg" sx={{
            background: 'white',
            marginTop: '70px',
            padding: '20px',
            borderRadius: '2px',

        }}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                No Editorial To Display
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {
                    isLoggedIn ? 'Go and Write Editorial!...' : 'Login and Write Editorial'
                }
            </Typography>
            <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <Link to={isLoggedIn ? '/writeEditorial' : '/login'} style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>

                    <Button variant="contained">
                        {
                            isLoggedIn ? 'Write Editorial' : 'Login Now'
                        }
                    </Button>
                </Link>

            </Stack>
        </Container>
    )
}
