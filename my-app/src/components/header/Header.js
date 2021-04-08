import React, {useContext, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {Context} from '../Context'

function Header() {

    const {setDarkMode, darkMode} = useContext(Context)

    return (
        <header className={`header ${darkMode ? 'darkmode' : ''}`}>
            <Link to='/'>
                <h1>Where in the world?</h1> 
            </Link>

            <span className='dark-mode' onClick={ () =>  {
                    setDarkMode(!darkMode)
            }}>
            <FontAwesomeIcon 
                className='icon' 
                icon={faMoon}
            />
                Dark Mode
            </span>
        </header>
    )
}

export default Header
