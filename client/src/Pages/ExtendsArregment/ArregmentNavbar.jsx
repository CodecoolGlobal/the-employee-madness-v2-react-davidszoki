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
                    <a href='/last' >
                        Last name
                    </a>
                </li>
                <li>
                    <a href='/middle' >
                        Middle name
                    </a>
                </li>
                <li>
                    <a href='/level' >
                        Level
                    </a>
                </li>
                <li>
                    <a href='/position' >
                        Position
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
