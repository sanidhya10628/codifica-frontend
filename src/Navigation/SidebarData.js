import react from "react";

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import * as HiIcons from 'react-icons/hi'
import { BsFillFileCodeFill } from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Editorials',
        path: '/editorials',
        icon: <AiIcons.AiFillCode />,
        cName: 'nav-text',
    },
    {
        title: 'Write Editorial',
        path: '/writeEditorial',
        icon: <HiIcons.HiPencilAlt />,
        cName: 'nav-text',
    },
    {
        title: 'My Editorials',
        path: '/myeditorials',
        icon: <BsFillFileCodeFill />,
        cName: 'nav-text',
    },
    {
        title: 'Login',
        path: '/login',
        icon: <FaIcons.FaSignInAlt />,
        cName: 'nav-text',
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <FaIcons.FaSignOutAlt />,
        cName: 'nav-text',
    }
]