import React from 'react'

//  Import CSS
import './PageNotFound.css'

// React Router Dom
import { Link } from 'react-router-dom'

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
