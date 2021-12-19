import React, { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Loading } from '../../Shared/components/Loading';
import { LoginIn } from '../../Shared/API/api'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { AuthContext } from '../../Shared/context/auth-context';


import { AlertAction } from '../../Shared/components/Alert'


const theme = createTheme();

export const Login = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
    const authData = useContext(AuthContext)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleSubmit = async (event) => {
        try {
            setIsLoading(true)
            event.preventDefault();
            const Formdata = new FormData(event.currentTarget);

            if (email && password) {
                setEmail(Formdata.get('email'))
                setPassword(Formdata.get('password'))

                const response = await LoginIn(email, password)
                const data = await response.json()

                if (data['status'] === 'OK') {
                    localStorage.setItem('token', `Bearer ${data.token}`)
                    setIsLoggedIn(true)
                    setIsLoading(false)

                    authData.setEmail(data.user.email)
                    authData.setCFHandle(data.user.codeforcesHandle)
                    // navigate user to home page
                    navigate('/', { replace: true })
                } else {
                    // Loading set false
                    setIsLoading(false)

                    // Set is logged in false
                    setIsLoggedIn(false)

                    // Show Alert

                }

            }

            else {
                setIsLoading(false)

                // alert Email and password can not be empty
            }
        } catch (e) {
            console.log(e);
            setIsLoading(false)
        }
    };

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (isLoggedIn) {
        return (
            <Navigate to='/' replace={true}></Navigate>
        )
    }


    return (

        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="xs" sx={{
                background: 'white',
                borderRadius: '5px',
                color: 'black'
            }}>
                {/* <CssBaseline /> */}

                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',


                    }}
                >
                    {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockIcon />
                    </Avatar> */}

                    <Typography component="h1" variant="h5" sx={{
                        marginTop: '25px'
                    }}>
                        Sign in
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"

                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container sx={{
                            marginTop: '15px',
                            marginBottom: '25px'
                        }}>
                            <Grid item xs>
                                <Link to='/forgotPassword' style={{
                                    color: '#1976d2'
                                }}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                Don't have an account?
                                <Link to='/signUp' style={{
                                    marginLeft: '3px',
                                    color: '#1976d2'
                                }}>
                                    {"Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to='/'>
                Codifica
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
