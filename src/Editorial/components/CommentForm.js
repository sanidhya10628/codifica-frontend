import React, { useState } from 'react'

import axios from 'axios'

// Material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// Import Components
import { Loading } from '../../Shared/components/Loading';

// React Router Dom
import { useNavigate } from 'react-router-dom';

export const CommentForm = ({ id }) => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [comment, setComment] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (comment) {

            setIsLoading(true)

            try {

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
                const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/editorial/${id}/comment`, {
                    comment
                }, config)

                if (data['status'] === 'OK') {

                    alert(data.msg)
                    setIsLoading(false)
                    navigate(`/editorials`, { replace: true })

                } else {
                    alert(data.msg)
                    setIsLoading(false)
                }

            } catch (error) {
                alert(error)
                setIsLoading(false)

            }
        } else {
            alert('Comment can not empty')
        }
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
            <TextField

                margin="normal"
                required
                fullWidth
                id="comment"
                label="Comment"
                name="comment"
                autoFocus
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />


            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Add Comment
            </Button>
        </Box>
    )
}
