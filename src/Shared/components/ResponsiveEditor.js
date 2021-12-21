import React from 'react'

// Material Ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

import { Link } from 'react-router-dom';

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



export const ResponsiveEditor = () => {
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
