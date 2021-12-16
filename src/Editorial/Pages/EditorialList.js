import React, { useState, useEffect } from 'react'
import '../components/EditorialList.css'
import { Card } from '../../Shared/components/Card'

import { editorials } from '../../Shared/API/api'
import { SyncLoader } from 'react-spinners'

const override = {
    display: 'block',
    margin: '70px auto',
    borderColor: 'red'
}


export const EditorialList = () => {
    const [isLoading, setIsLoading] = useState(true)

    const getEditorials = async () => {
        const { data } = await editorials()
        console.log(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getEditorials()
    }, [])

    if (isLoading) {
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
    return (
        <div>
            <Card />
        </div>
    )
}
