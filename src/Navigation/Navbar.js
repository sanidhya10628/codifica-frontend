import React, { useState } from 'react'

// Import CSS
import './Navbar.css'

// React Router Dom
import { NavLink } from 'react-router-dom'

// Import Components
import { SideDrawer } from './SideDrawer/SideDrawer'
import { BackDrop } from './Backdrop/Backdrop'

// React Icons
import { FaBars } from 'react-icons/fa'


export const Navbar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)

    if (!isSideBarOpen) {
        return (
            <div className='navbar'>
                <div className='navbar-fabars-icon'>
                    <FaBars style={{
                        fontSize: '30px',
                        cursor: 'pointer'
                    }}
                        onClick={() => setIsSideBarOpen(true)}
                    />
                </div>
                <div className='navbar-logo'>
                    <NavLink to='/' className='navabar-link'>Codifica</NavLink>
                </div>
            </div>
        )
    }

    return (
        <>
            <SideDrawer
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            <BackDrop />
        </>
    )
}
