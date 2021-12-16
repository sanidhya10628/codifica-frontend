import { color } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

import './PageNotFound.css'
export const PageNotFound = () => {
    return (
        <div className='pagenot-found'>
            <header>
                We're sorry. The Web address you entered is not a functioning page on our site.
            </header>
            <div className="link-to-home-page">

                <Link to='/'
                    style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}
                > Go to Codifica Home Page </Link>

            </div>
        </div>
    )
}
