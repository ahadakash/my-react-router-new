import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <nav>
            <Link className='link' to="/friends">Friends</Link>
            <Link className='link' to="/contact">Conatct</Link>
            <Link className='link' to="/details">Details</Link>
            <Link to="/meals">Meals</Link>
        </nav>
    );
};

export default Header;