import React, { useState } from 'react';

// Import Material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



// React Router Dom
import { Link } from 'react-router-dom'

const theme = createTheme();

export const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (email) {
            setEmail(data.get('email'))
        }

        else {
            // alert Email and password can not be empty
        }
    };

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

