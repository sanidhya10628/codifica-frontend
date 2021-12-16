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

    const authData = useContext(AuthContext)
    const navigate = useNavigate();


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [codeforcesHandle, setCodeforcesHandle] = useState('')

    const isValidCFHandle = async () => {
        const response = await fetch(`https://codeforces.com/api/user.info?handles=${codeforcesHandle}`)
        const data = await response.json()
        if (data['status'] === 'FAILED') {
            alert('Handle does not exists')
            return false
        }
        return true
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            authData.setLoading(true)
            const data = new FormData(event.currentTarget);
            // eslint-disable-next-line no-console
            const isValid = await isValidCFHandle()
            if (email && password && codeforcesHandle && isValid) {

                const { data } = await signUp(codeforcesHandle, email, password)
                if (data.status === 'OK') {
                    localStorage.setItem('token', `Bearer ${data.token}`)
                    authData.setEmail(email)
                    authData.setCFHandle(codeforcesHandle)
                    // navigate to home page
                    authData.setIsLoading(false)
                    authData.isLoggedIn(true)
                    navigate('/', { replace: true })
                } else if (data.status === 'ERROR') {
                    const error = data.msg
                    alert(error)
                }

            } else {
                // email password name can not be empty
                // alert


            }
        } catch (e) {
            // console.log(e);
            alert('Something went wrong')
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
