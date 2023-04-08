import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
           <Link to='/' >Home</Link>
           <Link to='/review' >Order Review</Link>
           <Link to='/grandpa'>Grandpa</Link>
           <Link to='/' >About</Link>
           <Link to='/' >Contact</Link>
        </nav>
    );
};

export default Header;