import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import { CameraIcon } from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import './Card.css'


const cards = [1, 2];

const theme = createTheme();

export const CardComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}

            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} >
                                <Card
                                    sx={{
                                        height: '100%', display: 'flex', flexDirection: 'column',
                                        color: 'black',
                                        backgroundImage: 'linear-gradient(45deg, #85ffbd 98%, #ffffff 99%)'
                                    }}
                                >

                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <strong>Anton and currency you all know</strong>
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom component="div">
                                            <a href="https://codeforces.com/problemset/problem/1618/G" target='_blank' style={{
                                                textDecoration: 'none',
                                                color: '#1976d2'
                                            }}>Problem Link</a>
                                        </Typography>
                                        <Typography gutterBottom variant='body1' component='div'>
                                            Written By:- <span style={{


                                            }}>Sanidhya Mahajan</span>
                                        </Typography>
                                        <Typography variant="button" display="block" gutterBottom sx={{
                                            fontFamily: 'inherit',
                                            fontSize: '16px',
                                            textTransform: 'capitalize'

                                        }}>
                                            Programming Language: <span style={{

                                            }}>C++</span>
                                        </Typography>
                                        <Typography variant="button" display="block" gutterBottom className='rating-typo' sx={{
                                            fontFamily: 'inherit',
                                            fontWeight: '800',
                                            fontSize: '16px'
                                        }}>
                                            Rating: 1300
                                        </Typography>
                                        <Typography gutterBottom variant='body1' component='div' className='tags-typo'>
                                            <Button size='small' variant='contained' color='secondary'>
                                                Greedy
                                            </Button>
                                            <Button size='small' variant='contained' color='secondary'>
                                                Math

                                            </Button>
                                            <Button size='small' variant='contained' color='secondary'>
                                                Strings

                                            </Button>

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="medium" >View</Button>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

        </ThemeProvider >
    );
}


