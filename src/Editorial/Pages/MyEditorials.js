import React, { useState, useEffect } from 'react'

// Import Components
import { CardComponent } from '../../Shared/components/Card'
import { Loading } from '../../Shared/components/Loading'
import { myEditorialsAPI } from '../../Shared/API/api'


export const MyEditorials = () => {



    const [isLoading, setIsLoading] = useState(true)
    const [myEditorialList, setMyEditorialList] = useState([])

    const getEditorials = async () => {
        try {
            setIsLoading(true)
            const response = await myEditorialsAPI()
            const data = await response.json()
            if (data['status'] === 'OK') {

                setMyEditorialList(data.myEditorials)
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

            <CardComponent editorialList={myEditorialList} />
        </div>
    )
}
