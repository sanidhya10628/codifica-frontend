import React, { useState } from 'react'

import axios from 'axios';

// React Icons
import { MdDelete } from 'react-icons/md'
import { GrClose } from 'react-icons/gr'

// Material UI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// Import Components
import { AuthContext } from '../../Shared/context/auth-context'
import { CommentForm } from './CommentForm';
import { Loading } from '../../Shared/components/Loading';

// React Router Dom
import { useNavigate } from 'react-router-dom';

export const Comments = ({ comments, editorialId }) => {
    const navigate = useNavigate()

    const authData = React.useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const deleteComment = async (id) => {
        try {
            setIsLoading(true)
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            // console.log(id);
            const { data } = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete/comment/${id}`, config)

            if (data['status'] === 'OK') {
                alert(data.msg)
                setIsLoading(false)
                navigate(`/editorials`, { replace: true })
            }
            else {
                alert(data.msg)
                setIsLoading(false)
            }


        } catch (error) {
            // console.log(error)
            alert(error)
            setIsLoading(false)


        }
    }

    const addComment = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <Button sx={{
                        position: 'absolute',
                        right: '0',
                        fontSize: '20px',
                    }}><GrClose onClick={() => closeModal()} /></Button>
                    <CommentForm id={editorialId} />
                </Box>
            </Modal>


            <main>
                <Container sx={{ py: 2 }} maxWidth="md">
                    <Typography gutterBottom variant="h3" component="h1">
                        Comments
                        {
                            authData.isLoggedIn && (
                                <Button variant="contained" color='secondary' sx={{
                                    display: 'block',
                                    padding: '12px 24px',
                                    marginTop: '10px',
                                }}
                                    onClick={() => addComment()}
                                >Add Comment</Button>
                            )
                        }
                    </Typography>
                    {/* End hero unit */}
                    <Grid container spacing={4} sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {comments.map((comment) => (
                            <Grid item key={comment._id} xs={12}>
                                <Card
                                    sx={{
                                        height: '100%', display: 'flex', flexDirection: 'column',
                                    }}
                                >

                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {comment.cFHandle}
                                        </Typography>
                                        <Typography>
                                            {comment.comment}
                                        </Typography>

                                        {
                                            authData.cFHandle === comment.cFHandle && (
                                                <Typography gutterBottom variant='body1' component='div' className='tags-typo' sx={{
                                                    marginTop: '8px'
                                                }}>
                                                    {/* <Button
                                                        size='small'
                                                        variant='contained'
                                                        color='primary'
                                                        onClick={isEditComment ? () => saveCommentChanges() :
                                                            () => editComment()
                                                        }
                                                        endIcon={<MdEdit />}>
                                                        {isEditComment ? 'Save Changes' : 'Edit'}
                                                    </Button> */}
                                                    <Button
                                                        size='small'
                                                        variant='contained'
                                                        color='error'
                                                        endIcon={<MdDelete />}
                                                        onClick={() => deleteComment(comment._id)}>
                                                        Delete
                                                    </Button>



                                                </Typography>)

                                        }
                                    </CardContent>

                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

        </>
    )
}



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'black'
};
