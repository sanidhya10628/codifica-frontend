import React, { useState, useContext } from 'react';

// React Router Dom
import { Link, useNavigate } from 'react-router-dom'

// Material Ui Sign Up Page
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { signUp } from '../../Shared/API/api'


import { AuthContext } from '../../Shared/context/auth-context'



const theme = createTheme();

export const SignUp = () => {

    const navigate = useNavigate();


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [codeforcesHandle, setCodeforcesHandle] = useState('')

    // const { a } = useContext(AuthContext)
    // console.log(a)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        if (email && password && codeforcesHandle) {
            const { data } = await signUp(codeforcesHandle, email, password)
            // const data = await response.json()

            localStorage.setItem('token', `Bearer ${data.token}`)
            // navigate to home page

            navigate('/', { replace: true, state: data.newUser })

        } else {
            // email password name can not be empty
            // alert
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="codeforcesHandle"
                                    required
                                    fullWidth
                                    id="codeforcesHandle"
                                    label="Codeforces Handle"
                                    autoFocus
                                    value={codeforcesHandle}
                                    onChange={(e) => setCodeforcesHandle(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-start">
                            <Grid item>
                                Already have an account?
                                <Link to='/login' style={{
                                    marginLeft: '3px'
                                }}>
                                    Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to='/'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
