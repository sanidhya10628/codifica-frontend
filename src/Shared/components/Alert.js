import React, { useReducer } from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';


const initialState = {
    showAlert: true,
    alertMessage: '',
    alertSeverity: ''
}
export const AlertAction = ({ showAlert = false, alertMessage, alertSeverity }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(showAlert)
    if (!showAlert) {
        return (
            <>
            </>
        )
    }
    return (
        <Box sx={{
            marginTop: 8,
        }}>
            {
                true && (
                    <Alert
                        onClose={() => { }}
                        severity="error">
                        He
                    </Alert>
                )
            }
        </Box>
    )
}



const reducer = (state, action) => {

}