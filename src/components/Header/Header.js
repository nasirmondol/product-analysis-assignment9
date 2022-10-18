import React from 'react';
import CustomLink from '../../hooks/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <CustomLink to='/'>HOME</CustomLink>
            <CustomLink to='reviewDetails'>REVIEWS</CustomLink>
            <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink to='/blogs'>BLOGS</CustomLink>
            <CustomLink to='/about'>ABOUT</CustomLink>
        </nav>
    );
};

export default Header;