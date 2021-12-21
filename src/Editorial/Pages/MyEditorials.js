import React, { useState, useEffect } from 'react'

import axios from 'axios'


// Import Components
import { CardComponent } from '../../Shared/components/Card'
import { Loading } from '../../Shared/components/Loading'
// import { myEditorialsAPI } from '../../Shared/API/api'


export const MyEditorials = () => {



    const [isLoading, setIsLoading] = useState(true)
    const [myEditorialList, setMyEditorialList] = useState([])

    const getEditorials = async () => {
        try {
            setIsLoading(true)
            // const response = await myEditorialsAPI()
            // const data = await response.json()

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }

            const { data } = await axios.get('https://sanidhya-codifica.herokuapp.com/user/editorials', config)
            if (data['status'] === 'OK') {
                // console.log(data)
                setMyEditorialList(data.myEditorials)
                setIsLoading(false)


            } else {
                // console.log(data)
                setIsLoading(false)
                alert(data.msg)

            }
        } catch (error) {
            // console.log(error)
            setIsLoading(false)
            alert(error)
        }
    }

    useEffect(() => {
        console.log('inside use effect')
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
