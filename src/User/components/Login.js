import React, { useState, useContext } from 'react';

// Import Toast
import { Toast } from '../../Shared/components/Toast';

// Import CSS
import './Login.css'

import axios from 'axios'

// Material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import Components
import { Loading } from '../../Shared/components/Loading';
import { AuthContext } from '../../Shared/context/auth-context';
// import { LoginIn } from '../../Shared/API/api'

// React Router Dom
import { Link, Navigate, useNavigate } from 'react-router-dom';


// React Icons
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";


const theme = createTheme();

export const Login = () => {
    const { isLoggedIn, setIsLoggedIn, isShowToast, toastDetails, setToastDetails, } = useContext(AuthContext)
    const authData = useContext(AuthContext)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (event) => {
        try {
            setIsLoading(true)
            event.preventDefault();
            const Formdata = new FormData(event.currentTarget);

            if (email && password) {
                setEmail(Formdata.get('email'))
                setPassword(Formdata.get('password'))
                const config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                // const response = await LoginIn(email, password)
                // const data = await response.json()

                const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                    email, password
                }, config)
                // console.log(data)
                if (data['status'] === 'OK') {

                    localStorage.setItem('token', data.token)
                    authData.setIsLoggedIn(true)
                    authData.setEmail(data.user.email)
                    authData.setCFHandle(data.user.codeforcesHandle)
                    setIsLoading(false)

                    // navigate user to home page
                    navigate('/')

                } else {
                    // Set is logged in false
                    setIsLoggedIn(false)

                    // Show Alert
                    alert('Invalid email or password')
                    setToastDetails({
                        isShowToast: true,
                        toastType: 'error'
                    })

                    // Loading set false
                    setIsLoading(false)
                }

            }

            else {
                setIsLoading(false)

                // alert Email and password can not be empty
                alert('Email and password can not be empty')
            }
        } catch (e) {
            console.log(e);
            setIsLoading(false)
            alert(e)
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
            {/* {toastDetails.isShowToast && < Toast />} */}

            <Container component="main" maxWidth="xs" sx={{
                background: 'white',
                borderRadius: '5px',
                color: 'black'
            }}>


                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',


                    }}
                >


                    <Typography component="h1" variant="h5" sx={{
                        marginTop: '25px'
                    }}>
                        Sign in
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>

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
                            </Grid>
                            <Grid item xs={12}>

                                <div className="password-holder">
                                    <TextField
                                        margin="normal"

                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {
                                        !showPassword ? (
                                            <BsFillEyeFill
                                                className="eye-icon"
                                                onClick={() => setShowPassword(!showPassword)}
                                            />
                                        ) : (
                                            <BsFillEyeSlashFill
                                                className="eye-icon"
                                                onClick={() => setShowPassword(!showPassword)}
                                            />
                                        )
                                    }
                                </div>

                            </Grid>
                        </Grid>
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

            </Container>
        </ThemeProvider>
    );
}


