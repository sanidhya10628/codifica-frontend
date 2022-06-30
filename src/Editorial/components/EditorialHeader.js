import React from 'react'

// Material UI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';


// React Router Dom
import { Link } from 'react-router-dom';

export const EditorialHeader = ({ editorial }) => {
    return (
        <Box
            sx={{
                bgcolor: 'white',
                pt: 0,
                pb: 0,
            }}
        >
            <Container maxWidth="sm">
                {
                    editorial && (
                        <>
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                {editorial.title}
                            </Typography>
                            <CardActions sx={{
                                display: 'flex',
                                justifyContent: 'center',

                            }}>
                                <Link to={`/editorials`} style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}>
                                    <Button size="medium" variant='contained' color='secondary' sx={{
                                        fontSize: '18px'
                                    }}>Back to Editorials</Button>

                                </Link>
                            </CardActions>
                        </>
                    )
                }

            </Container>
        </Box>
    )
}
