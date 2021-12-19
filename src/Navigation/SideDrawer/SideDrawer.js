import React from 'react'

// Import CSS
import './SideDrawer.css'

// Import React Router Dom
import { NavLink } from 'react-router-dom'

// Import Components
import { NavLinks } from '../NavLinks/NavLinks'
import { FaWindowClose } from 'react-icons/fa'



export const SideDrawer = ({ isSideBarOpen, setIsSideBarOpen }) => {
    return (
        <nav className={isSideBarOpen ? 'side-drawer active' : 'side-drawer'} >
            <header>
                <div className='side-drawer-logo'>
                    <NavLink to='/' className='side-drawer-logo-link' onClick={() => setIsSideBarOpen(false)}>Codifica</NavLink>
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
