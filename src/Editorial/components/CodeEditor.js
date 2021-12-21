import React, { useState, useEffect } from 'react'


import axios from 'axios'

//  React Router Dom
import { Link, useNavigate } from 'react-router-dom';



// import Components
import { Loading } from '../../Shared/components/Loading'

// import Auth Context
import { AuthContext } from '../../Shared/context/auth-context'

// Backend API
// import { writeEditorialAPI } from '../../Shared/API/api'

// import CSS
import './WriteEditorial.css'

// Code Editor
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-dracula";

// Material Ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';




export const CodeEditor = () => {

    const navigate = useNavigate()

    // Auth Context
    const authData = React.useContext(AuthContext)

    // Loading
    const [isLoading, setIsLoading] = useState(false)

    // Form Data
    const [problemLink, setProblemLink] = useState('')
    const [editorialDesc, setEditorialDesc] = useState('')
    const [editorialCode, setEditorialCode] = useState('')

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


    let isAccepted = false
    let contestId = 0
    let index = '' // A,B,C,D,E
    let title = ''
    let rating = 0
    let tags = []
    let programmingLanguage = ''


    // problem



    // code editor function
    const onEditorStateChange = (newValue) => {
        setEditorialCode(newValue)
    }


    const handleSubmit = async (e) => {

        e.preventDefault()
        setIsLoading(true)
        try {
            if (problemLink && editorialDesc && editorialCode) {

                await isUserHasSubmittedProblem()
                if (isAccepted) {
                    let name = title
                    let problemTags = tags
                    let difficultyLevel = rating
                    // const response = await writeEditorialAPI(
                    //     problemLink,
                    //     name,
                    //     contestId,
                    //     problemTags,
                    //     difficultyLevel,
                    //     editorialDesc,
                    //     editorialCode,
                    //     programmingLanguage,
                    //     index
                    // )


                    // const data = await response.json()

                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }

                    const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/write/editorial`, {
                        problemLink,
                        name,
                        contestId,
                        problemTags,
                        difficultyLevel,
                        editorialDesc,
                        editorialCode,
                        programmingLanguage,
                        index
                    }, config)

                    // console.log(data)
                    if (data['status'] === 'OK') {

                        // success editorial saved 
                        setIsLoading(false)
                        navigate('/', { replace: true })

                    } else {

                        setIsLoading(false)
                        alert(data.msg)
                    }
                }

            } else {

                setIsLoading(false)
                alert('All field are Required')

            }
        }
        catch (e) {

            setIsLoading(false)
            // console.log(e);
        }
    }



    // Validate that user has accepted answer or not
    const isUserHasSubmittedProblem = async () => {
        try {
            const handle = authData.cFHandle
            const response = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`)
            const data = await response.json()


            if (data['status'] === 'OK') {
                const result = data['result']

                // contestId from problemLink
                let contestIdPL = "";
                for (let i = 0; i < problemLink.length; i++) {
                    if (problemLink.charAt(i) >= "0" && problemLink.charAt(i) <= "9") {
                        contestIdPL += problemLink.charAt(i);
                    }
                    if (contestIdPL !== "" && problemLink.charAt(i) === "/") {
                        break;
                    }
                }
                contestIdPL = parseInt(contestIdPL)
                // console.log(cid);

                // problemCode from problemLink
                let problemCode = "";
                for (let i = problemLink.length - 1; i >= 0; i--) {
                    if (problemLink !== "" && problemLink.charAt(i) === "/") {
                        break;
                    }
                    problemCode += problemLink.charAt(i);
                }

                // const pCode = parseInt(problemCode)


                // check that user has submitted it and has Verdict ok or not
                for (let i = 0; i < result.length; i++) {
                    if (
                        result[i].contestId === contestIdPL &&
                        result[i].problem.index === problemCode &&
                        result[i].verdict === "OK"
                    ) {
                        // console.log(result);
                        isAccepted = true
                        contestId = contestIdPL
                        index = problemCode
                        title = result[i].problem.name
                        programmingLanguage = result[i].programmingLanguage
                        tags = result[i].problem.tags
                        rating = result[i].problem.rating

                    }
                    if (isAccepted) {
                        break;
                    }
                }

                if (!isAccepted) {
                    throw Error("Not have AC on Codeforces")
                }




            } else {
                // something went wrong
                setIsLoading(false)

            }
        } catch (e) {
            setIsLoading(false)
            alert(e)
        }
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (windowSize < 600) {
        return (
            <div>
                <Modal
                    open={true}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Sorry
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            IDE doesn't support screen widths smaller than <strong>600px</strong> at the moment!
                        </Typography>
                        <Divider sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            color: 'black'

                        }} />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Please move to a bigger screen size.IDE's shouldn't have mobile views in the first place but we're working on it for you.
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                            marginBottom: '5px'
                        }}>
                            <strong>Thanks for hearing me out! HAPPY CODING. :)</strong>
                        </Typography>
                        <Link to='/' style={{
                            textDecoration: 'none',
                            color: '#1976d2',
                            fontSize: '16px'
                        }}>
                            Back to Home
                        </Link>
                    </Box>
                </Modal>
            </div>
        )
    }


    return (
        <div className='main-div'>
            <section>
                <h1>
                    Write Your Editorial Here
                </h1>
                <div className="form-control">
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <TextField
                                id="standard-basic"
                                label="Problem Link"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setProblemLink(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={15}
                                placeholder="Write Editorial Description Here"
                                style={{
                                    padding: '10px 15px',
                                    letterSpacing: '1.5px',
                                    borderRadius: '3px',
                                    maxWidth: '600px',
                                    width: '100%'
                                }}
                                onChange={(e) => setEditorialDesc(e.target.value)}
                            />
                        </div>


                        <div className="input-field" style={{
                            marginBottom: '10px'
                        }}>
                            <AceEditor
                                mode="c_cpp"
                                theme="dracula"
                                onChange={onEditorStateChange}
                                name="UNIQUE_ID_OF_DIV"
                                editorProps={{ $blockScrolling: true }}

                            // className='aceEditor-editor'

                            />
                        </div>

                        <div className="input-field" style={{
                            marginBottom: '20px'
                        }}>
                            <Button type='submit'
                                variant="contained"
                                fullWidth>Add Editorial</Button>
                        </div>
                    </form>
                </div>




            </section>

        </div>


    )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'black'
};

