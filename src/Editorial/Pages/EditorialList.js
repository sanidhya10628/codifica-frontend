import React, { useState, useEffect } from 'react'

import axios from 'axios'

// Import CSS
import '../components/EditorialList.css'

// Import Components
import { CardComponent } from '../../Shared/components/Card'
import { Loading } from '../../Shared/components/Loading'
// import { editorials } from '../../Shared/API/api'


export const EditorialList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [editorialList, setEditorialList] = useState([])

    const getEditorials = async () => {
        try {
            setIsLoading(true)
            // const response = await editorials()
            // const data = await response.json()

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const { data } = await axios.get('https://sanidhya-codifica.herokuapp.com/editorials', config)

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
