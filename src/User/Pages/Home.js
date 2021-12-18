import React, { useContext } from 'react'

import { AuthContext } from '../../Shared/context/auth-context'

import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

import { FaLaptopCode } from 'react-icons/fa'
import './Home.css'
import { color } from '@mui/system';
import { SiPython, SiJavascript, SiJava, SiCplusplus, SiKotlin } from 'react-icons/si'

export const Home = () => {



    const { isLoggedIn, email, cFHandle, loading, setLoading } = useContext(AuthContext)

    if (loading) {
        return (
            <div>
                Loading
            </div>
        )
    }
    return (
        <div>
            {
                isLoggedIn ? (
                    <h1>Welcome {cFHandle}!.. You are Logged IN!....</h1>
                ) : (
                    <div className="hero">
                        <section>
                            <h1>
                                Welcome to Codifica
                            </h1>
                            <div className="info">
                                A place to Read and Write Unofficial Codeforces Editorials
                            </div>
                            <div className="btn">
                                <Link to='/login' style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}>
                                    <button>
                                        Login Now
                                    </button>
                                </Link>

                            </div>
                            <div className="faIcon">
                                <FaLaptopCode style={{
                                    fontSize: '150px',
                                    color: 'rgb(129 240 229)'
                                }} />
                            </div>
                            <div className='languages-Icon'>
                                {iconData.map((item) => {
                                    return (
                                        <article key={item.id}>
                                            {item.icon}
                                        </article>
                                    )
                                })}
                            </div>
                        </section>
                    </div>
                )
            }

        </div>
    )
}
const iconCSSOverride = {
    fontSize: '40px'
}

const iconData = [
    {
        id: '1',
        icon: <SiCplusplus style={iconCSSOverride} />
    },
    {
        id: '2',
        icon: <SiJava style={iconCSSOverride} />
    },
    {
        id: '3',
        icon: <SiPython style={iconCSSOverride} />
    }
]

const iconOverride = {
    fontSize: '40px'
}