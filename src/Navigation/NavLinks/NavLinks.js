import React, { useContext } from 'react'

// import axios from 'axios'

// Import CSS
import './NavLinks.css'

// React Router Dom
import { useNavigate, NavLink } from 'react-router-dom'

// React Icons
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { AiFillHome, AiFillCode } from 'react-icons/ai'
import { HiPencilAlt } from 'react-icons/hi'
import { BsFillFileCodeFill } from 'react-icons/bs'

// Import Components
// import { Logout } from '../../Shared/API/api'
import { AuthContext } from '../../Shared/context/auth-context'



// Style (CSS) Override
const IconCSS = {
    marginRight: '2px'
}


export const NavLinks = ({ setIsSideBarOpen }) => {
    const navigate = useNavigate()
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    const handleOnClick = () => {
        setIsSideBarOpen(false)
    }

    const handleLogout = async () => {
        try {
            setIsSideBarOpen(false)
            // const res = await Logout()
            // const data = await res.json()
            // const config = {
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authorization: `Bearer ${localStorage.getItem('token')}`
            //     }
            // }
            // const { data } = await axios.post('https://sanidhya-codifica.herokuapp.com/logout', {
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authorization: `Bearer ${localStorage.getItem('token')}`
            //     }
            // })

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            const data = await response.json()
            // console.log(data)
            if (data['status'] === 'OK') {

                // remove from local storage
                localStorage.removeItem('token')

                setIsLoggedIn(false)


                alert('Logout Successfull')
                navigate('/', { replace: true })

            } else {
                setIsLoggedIn(false)
                localStorage.removeItem('token')
                alert(data.msg)
                navigate('/', { replace: true })
            }

        } catch (e) {
            setIsLoggedIn(false)

            // console.log(e);
            localStorage.removeItem('token')
            navigate('/', { replace: true })

        }
    }


    return (
        <div className='toolbar_navigation-items'>
            <ul>
                <NavLink to='/' className="side-drawer-link">
                    <li onClick={handleOnClick}>
                        <AiFillHome style={IconCSS} />  Home
                    </li>
                </NavLink>

                <NavLink to='/editorials' className='toolbar_navigation-item'>
                    <li onClick={handleOnClick}>
                        <AiFillCode style={IconCSS} /> Editorials
                    </li>
                </NavLink>

                {
                    isLoggedIn && (
                        <NavLink to='/writeEditorial' className='toolbar_navigation-item'>
                            <li onClick={handleOnClick}>
                                <HiPencilAlt style={IconCSS} /> Write Editorial
                            </li>
                        </NavLink>
                    )
                }

                {
                    isLoggedIn && (
                        <NavLink to='/myeditorials' className='toolbar_navigation-item'>
                            <li onClick={handleOnClick}>
                                <BsFillFileCodeFill style={IconCSS} /> My Editorial
                            </li>
                        </NavLink>
                    )
                }

                {
                    !isLoggedIn && (
                        <NavLink to='/login' className='toolbar_navigation-item'>
                            <li onClick={handleOnClick}>
                                <FaSignInAlt style={IconCSS} />  Login
                            </li>
                        </NavLink>
                    )
                }


                {
                    isLoggedIn && (
                        <div className='toolbar_navigation-item'>
                            <li onClick={handleLogout} style={{
                                cursor: 'pointer'
                            }}> <FaSignOutAlt style={IconCSS} /> Logout</li>
                        </div>
                    )
                }

            </ul>
        </div>
    )
}
