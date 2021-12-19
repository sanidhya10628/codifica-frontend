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
        try {
            setIsLoading(true)
            const response = await editorials()
            const data = await response.json()
            if (data['status'] === 'OK') {
                setEditorialList(data.allEditorials)
                // console.log(data)

                setIsLoading(false)
            } else {
                setIsLoading(false)

                alert(data.msg)
            }
        } catch (error) {
            setIsLoading(false)
            alert(error)
        }
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
