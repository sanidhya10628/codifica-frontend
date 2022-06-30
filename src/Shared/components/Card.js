import React from 'react';

// Import CSS
import './Card.css'

// Material UI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// React Router Dom
import { Link } from 'react-router-dom';

// Import Components
import { NoEditorial } from './NoEditorial';


const theme = createTheme();

export const CardComponent = ({ editorialList }) => {
    if (editorialList.length === 0) {
        return (
            <NoEditorial />
        )
    }
    return (
        <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}

            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {editorialList.map((editorial) => (
                            <Grid item key={editorial._id} xs={12} >
                                <Card
                                    sx={{
                                        height: '100%', display: 'flex', flexDirection: 'column',
                                        color: 'black',
                                    }}
                                >

                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <strong>{editorial.title}</strong>
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom component="div">
                                            <a href={editorial.problemLink} target='_blank' style={{
                                                textDecoration: 'none',
                                                color: '#1976d2'
                                            }}>Problem Link</a>
                                        </Typography>
                                        <Typography gutterBottom variant='body1' component='div'>
                                            Written By:- <span style={{


                                            }}>
                                                <a
                                                    href={`https://codeforces.com/profile/${editorial.cFHandle}`}
                                                    target='_blank'
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#1976d2'
                                                    }}
                                                >
                                                    {editorial.cFHandle}
                                                </a>
                                            </span>
                                        </Typography>
                                        <Typography variant="button" display="block" gutterBottom sx={{
                                            fontFamily: 'inherit',
                                            fontSize: '16px',
                                            textTransform: 'capitalize'

                                        }}>
                                            Programming Language: <span style={{

                                            }}>{editorial.programmingLanguage}</span>
                                        </Typography>
                                        <Typography variant="button" display="block" gutterBottom className='rating-typo' sx={{
                                            fontFamily: 'inherit',
                                            fontWeight: '800',
                                            fontSize: '16px'
                                        }}>
                                            Problem Rating: {editorial.difficultyLevel}
                                        </Typography>
                                        <Typography gutterBottom variant='body1' component='div' className='tags-typo'>
                                            {editorial.problemTags.map((tag, index) => {
                                                return (

                                                    <Button size='small' variant='contained' color='secondary' key={index}>
                                                        {tag}
                                                    </Button>
                                                )
                                            })}

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={`/editorial/${editorial._id}`} style={{
                                            textDecoration: 'none',
                                            color: 'inherit'
                                        }}>
                                            <Button size="medium" >View</Button>

                                        </Link>
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


