import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to='/first'>
                        First name
                    </Link>
                </li>
                <li>
                    <Link to='/last' >
                        Last name
                    </Link>
                </li>
                <li>
                    <Link to='/level' >
                        Level
                    </Link>
                </li>
                <li>
                    <Link to='/position' >
                        Position
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
