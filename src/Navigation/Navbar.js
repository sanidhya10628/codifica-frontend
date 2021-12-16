import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { SideDrawer } from './SideDrawer/SideDrawer'
import { BackDrop } from './Backdrop/Backdrop'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'

export const Navbar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [sidebarActiveClass, setSidebarActiveClass] = useState('')



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
                sidebarActiveClass={sidebarActiveClass}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            <BackDrop />
        </>
    )
}
