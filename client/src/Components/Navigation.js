import { Link, NavLink } from 'react-router-dom';
import React from 'react';

function Navigation() {
    return(
        <nav className='nav navbar'>
            <ul>
                <li>
                    <NavLink to= "/category">Category</NavLink>
                </li>
                <li>
                    <NavLink to= "/brand">Brand</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;