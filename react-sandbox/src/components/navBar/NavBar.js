import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( <>
        <NavLink exact to = {'/'} activeStyle={{ fontWeight: '900'}}>Home</NavLink>
        <NavLink to = {'/counter'} activeStyle={{ fontWeight: '900'}}>Counter</NavLink>
    </> );
}
 
export default NavBar;