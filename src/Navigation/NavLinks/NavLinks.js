import React from 'react'

import { NavLink } from 'react-router-dom'
import { FaBars, FaWindowClose, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { AiFillHome, AiFillCode } from 'react-icons/ai'
import { HiPencilAlt } from 'react-icons/hi'
import { BsFillFileCodeFill } from 'react-icons/bs'

import './NavLinks.css'
const IconCSS = {
    marginRight: '2px'
}
export const NavLinks = ({ setIsSideBarOpen }) => {
    const handleOnClick = () => {
        setIsSideBarOpen(false)
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

                <NavLink to='/writeEditorial' className='toolbar_navigation-item'>
                    <li onClick={handleOnClick}>
                        <HiPencilAlt style={IconCSS} /> Write Editorial
                    </li>
                </NavLink>

                <NavLink to='/myeditorials' className='toolbar_navigation-item'>
                    <li onClick={handleOnClick}>
                        <BsFillFileCodeFill style={IconCSS} /> My Editorial
                    </li>
                </NavLink>

                <NavLink to='/login' className='toolbar_navigation-item'>
                    <li onClick={handleOnClick}>
                        <FaSignInAlt style={IconCSS} />  Login
                    </li>
                </NavLink>

                {/* <li>
                    <NavLink to='/signUp' className='toolbar_navigation-item'>Register</NavLink>
                </li> */}

                <NavLink to='/logout' className='toolbar_navigation-item'>
                    <li onClick={handleOnClick}> <FaSignOutAlt style={IconCSS} /> Logout</li>
                </NavLink>

            </ul>
        </div>
    )
}
