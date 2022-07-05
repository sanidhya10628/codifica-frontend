import React, { useState, useEffect } from 'react';

// Import Material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import Axios
import axios from 'axios'

// React Icons
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

// React Router Dom
import { useParams, useNavigate, Navigate } from 'react-router-dom';

// React Router Dom
import { Link } from 'react-router-dom'

// Import Components
import { Loading } from '../../Shared/components/Loading';

const theme = createTheme();

const config = {
    headers: {
        "Content-Type": "application/json"
    }
}
const checkValidURL = async (id, token) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/checkValidId`, {
            id, token
        }, config)

        if (data.status === 'OK') {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}


export const ResetPassword = () => {

    const [isLoading, setIsLoading] = useState(true); // at the time of page load it should be true
    const { id, token } = useParams();

    const navigate = useNavigate();

    // Check if this ID exits in the database


    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const handleSubmit = async (event) => {
        try {
            setIsLoading(true);
            event.preventDefault();
            if (password) {
                // Request for Password Update to the server

                const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/reset-password`, {
                    id, token, password
                }, config)

                if (data.status === 'OK') {
                    alert(data.msg);
                    navigate('/')
                    setPassword('');
                } else {
                    alert(data.msg);
                    setIsLoading(false);
                    setPassword('');
                }
            }

            else {
                // alert Password can not be empty
                alert('Password cannot be empty')
                setIsLoading(false);
                setPassword('');
            }
        } catch (error) {
            setPassword('');
            alert(error.message);
            setIsLoading(false);
        }
    };

    useEffect(async () => {
        const isValid = await checkValidURL(id, token)
        if (isValid === true) {
            setIsLoading(false);
        } else {
            setIsLoading(false);
            alert('Reset password link expired. Please try again')
            // navigate user to home page
            navigate('/forgotPassword')
        }
    }, [])


    if (isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <ThemeProvider theme={theme}>

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
                        Reset Password
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2, width: '100%' }}>
                        <Grid container spacing={0}>
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
                            Reset Password
                        </Button>

                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}

