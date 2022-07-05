import React, { useState } from 'react';

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

// Import Componenets
import { Loading } from '../../Shared/components/Loading';

// React Router Dom
import { Link } from 'react-router-dom'

const theme = createTheme();

export const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        setIsLoading(true);
        try {

            event.preventDefault();
            const formData = new FormData(event.currentTarget);

            if (email) {
                setEmail(formData.get('email'))
                const config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

                const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/forgot-password`, {
                    email
                }, config)


                if (data.status === 'OK') {
                    alert(data.msg);
                    setIsLoading(false);
                    setEmail('')
                } else {
                    alert(data.msg);
                    setIsLoading(false);
                }
            }

            else {
                // alert Email can not be empty
                alert('Email Cannot be empty');
                setIsLoading(false);
            }
        } catch (error) {

            alert(error.message);
            setIsLoading(false);
        }
    };

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

                    <Typography component="h1"
                        sx={{
                            marginTop: '25px'
                        }}
                        variant="h5">
                        Forgot Password
                    </Typography>
                    <Typography variant='p' style={{
                        marginTop: '10px'
                    }}>
                        To reset your password, submit your email address below. If we can find you in the database, an email will be sent to your email address, with instructions how to get access again.
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


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Forgot Password
                        </Button>
                        <Grid container sx={{
                            marginTop: '15px',
                            marginBottom: '25px'
                        }}>

                            <Grid item>
                                Already have an account?
                                <Link to='/login' style={{
                                    marginLeft: '3px',
                                    color: '#1976d2'
                                }}>
                                    {"Sign In"}
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}

