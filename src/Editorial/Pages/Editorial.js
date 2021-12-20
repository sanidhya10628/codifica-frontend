import React, { useState, useEffect } from 'react'

// Import CSS
import '../components/Editorial.css'

// Material UI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';


import { MdEdit, MdDelete } from 'react-icons/md'

// React Router Dom
import { useParams } from 'react-router-dom';

// Import Components
import { singleEditorialAPI } from '../../Shared/API/api'
import { Loading } from '../../Shared/components/Loading'
import { EditorialHeader } from '../components/EditorialHeader'
import { ResponsiveEditor } from '../../Shared/components/ResponsiveEditor'
import { AuthContext } from '../../Shared/context/auth-context'

// Code Editor
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-dracula";

const theme = createTheme();


export const Editorial = () => {

    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [editorial, setEditorial] = useState(null)

    const [editorialCode, setEditorialCode] = useState('')
    const authData = React.useContext(AuthContext)
    // code editor function
    const onEditorStateChange = (newValue) => {
        setEditorialCode(newValue)
    }
    const getEditorial = async () => {
        try {

            setIsLoading(true)
            const response = await singleEditorialAPI(id)
            const data = await response.json()

            // console.log(data);

            if (data['status'] === 'OK') {
                setEditorial(data.editorial)
                setEditorialCode(data.editorial.editorialCode)
                setIsLoading(false)


            } else {

                setIsLoading(false)
                alert(data.msg)

            }

        } catch (error) {

            console.log(error);
            setIsLoading(false)
            alert(error)

        }
    }

    useEffect(() => {
        getEditorial()
    }, [])


    // For Responsive
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const checkWindowSize = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkWindowSize)
        return () => {
            window.removeEventListener('resize', checkWindowSize)
        }
    })

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (windowSize < 635) {
        return (
            <ResponsiveEditor windowSize={windowSize} />
        )
    }

    return (
        <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}
            <main>
                {/* Hero unit */}
                <EditorialHeader editorial={editorial} />
                {/* End of Hero Unit */}

                {
                    editorial && (
                        <Container sx={{ py: 8 }} maxWidth="md">
                            <Grid container spacing={4}>

                                <Grid item key={editorial._id} xs={12} >
                                    <Card
                                        sx={{
                                            height: '100%', display: 'flex', flexDirection: 'column',
                                            color: 'black',
                                            background: '#85ffbd',

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
                                                fontSize: '16px',

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
                                            <Typography gutterBottom variant='body1' component='div' sx={{
                                                marginTop: '20px',
                                                marginBottom: '20px',
                                                fontSize: '18px'
                                            }}>
                                                {
                                                    editorial.editorialDesc
                                                }
                                            </Typography>
                                            <div style={{
                                                marginBottom: '10px',

                                            }}>
                                                <AceEditor
                                                    mode="c_cpp"
                                                    theme="dracula"
                                                    onChange={onEditorStateChange}
                                                    name="UNIQUE_ID_OF_DIV"
                                                    editorProps={{ $blockScrolling: true }}
                                                    value={editorialCode}
                                                    readOnly={true}
                                                    fontSize={14}
                                                    height='700px'
                                                    width={windowSize > 800 ? '700px' : '550px'}
                                                />
                                            </div>



                                            {
                                                authData.cFHandle === editorial.cFHandle ? (
                                                    <Typography gutterBottom variant='body1' component='div' className='tags-typo'>
                                                        <Button size='large' variant='contained' color='primary' endIcon={<MdEdit />}>
                                                            Edit
                                                        </Button>
                                                        <Button size='large' variant='contained' color='error' endIcon={<MdDelete />}>
                                                            Delete
                                                        </Button>



                                                    </Typography>) : undefined

                                            }

                                        </CardContent>

                                    </Card>
                                </Grid>

                            </Grid>
                        </Container>
                    )
                }
            </main>

        </ThemeProvider>
    )
}
