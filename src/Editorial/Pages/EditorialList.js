import React, { useState, useEffect } from 'react'

// Import CSS
import '../components/EditorialList.css'

// Import Components
import { CardComponent } from '../../Shared/components/Card'
import { editorials } from '../../Shared/API/api'
import { Loading } from '../../Shared/components/Loading'


export const EditorialList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [editorialList, setEditorialList] = useState([])

    const getEditorials = async () => {
        const response = await editorials()
        const data = await response.json()
        setEditorialList(data)
        // console.log(data)

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

            <CardComponent editorialList={editorialList} />
        </div>
    )
}
