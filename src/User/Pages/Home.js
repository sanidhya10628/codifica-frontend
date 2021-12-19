import React, { useContext } from 'react'

// Import CSS
import './Home.css'

// Import Components
import { AuthContext } from '../../Shared/context/auth-context'
import { Loading } from '../../Shared/components/Loading';

// React Router Dom
import { Link } from 'react-router-dom';

// React Icons
import { FaLaptopCode } from 'react-icons/fa'
import { SiPython, SiJava, SiCplusplus } from 'react-icons/si'


export const Home = () => {

    const { isLoggedIn, cFHandle, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <div className="hero">
                <section>
                    <h1>
                        Welcome {!isLoggedIn ? ' to Codifica' : `${cFHandle}`}
                    </h1>
                    <div className="info">
                        A place to Read and Write Unofficial Codeforces Editorials
                    </div>
                    <div className="btn">
                        <Link to={isLoggedIn ? '/writeEditorial' : '/login'} style={{
                            textDecoration: 'none',
                            color: 'inherit'
                        }}>
                            <button>
                                {isLoggedIn ? 'Write Editorial' : 'Login Now'}
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
