import React, { useState, useContext } from 'react';

// React Router Dom
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

// Material Ui Sign Up Page
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import Components
import { signUp } from '../../Shared/API/api'
import { Loading } from '../../Shared/components/Loading';
import { AuthContext } from '../../Shared/context/auth-context'


const theme = createTheme();

export const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)
        try {
            event.preventDefault();
            if (email && password && codeforcesHandle) {


                const isValid = await isValidCFHandle()
                if (isValid) {

                    const response = await signUp(codeforcesHandle, email, password)
                    const data = await response.json()


                    if (data.status === 'OK') {
                        localStorage.setItem('token', `Bearer ${data.token}`)
                        authData.setEmail(email)
                        authData.setCFHandle(codeforcesHandle)

                        // navigate to home page

                        authData.setIsLoggedIn(true)
                        setIsLoading(false)
                        navigate('/', { replace: true })

                    } else if (data.status === 'ERROR') {

                        const error = data.msg
                        alert(error)

                    }
                } else {
                    alert('Validations failed')

                }
            } else {
                // email password name can not be empty
                // alert
                setIsLoading(false)
                alert('all field are required')

            }
        } catch (e) {
            setIsLoading(false)
            alert('Something went wrong')
        }
    };

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (authData.isLoggedIn) {
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
                        <Grid container justifyContent="flex-start" sx={{
                            marginTop: '15px',
                            marginBottom: '25px'
                        }}>
                            <Grid item>
                                Already have an account?
                                <Link to='/login' style={{
                                    marginLeft: '3px',
                                    color: '#1976d2'
                                }}>
                                    Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}




