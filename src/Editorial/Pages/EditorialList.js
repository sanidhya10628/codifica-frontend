import React, { useState, useEffect } from 'react'
import '../components/EditorialList.css'
import { CardComponent } from '../../Shared/components/Card'

import { editorials } from '../../Shared/API/api'
import { Loading } from '../../Shared/components/Loading'



export const EditorialList = () => {
    const [isLoading, setIsLoading] = useState(true)

    const getEditorials = async () => {
        const response = await editorials()
        const data = await response.json()

        console.log(data)

        setIsLoading(false)
    }

    useEffect(() => {
        getEditorials()
    }, [])

    if (isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <CardComponent />
        </div>
    )
}
