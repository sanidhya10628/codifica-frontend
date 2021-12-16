import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SideDrawer.css'
import { FaBars, FaWindowClose } from 'react-icons/fa'


import { NavLinks } from '../NavLinks/NavLinks'

export const SideDrawer = ({ isSideBarOpen, sidebarActiveClass, setIsSideBarOpen }) => {





    return (
        <nav className={isSideBarOpen ? 'side-drawer active' : 'side-drawer'} >
            <header>
                <div className='side-drawer-logo'>
                    <NavLink to='/' className='side-drawer-logo-link'>Codifica</NavLink>
                </div>
                <div className='faBars-icon'>
                    <FaWindowClose onClick={() => setIsSideBarOpen(false)} />
                </div>
            </header>
            <div className="side-drawer-items">
                <ul>
                    <NavLinks setIsSideBarOpen={setIsSideBarOpen} />

                </ul>
            </div>
        </nav >

    )
}
