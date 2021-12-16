import React from 'react'
import { SyncLoader } from 'react-spinners'
import './Loading.css'

const override = {
    display: 'block',
    margin: '70px auto',
    borderColor: 'red'
}

export const Loading = () => {
    return (
        <div className="loading" style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '70vh',
        }}>
            <SyncLoader
                css={override}
                size={20}
                color='#36D7B7' />
        </div>
    )
}
