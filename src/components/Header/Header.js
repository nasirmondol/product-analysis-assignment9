import React from 'react';
import CustomLink from '../../hooks/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <CustomLink className='style' to='/'>HOME</CustomLink>
            <CustomLink className='style' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='style' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='style' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='style' to='/about'>ABOUT</CustomLink>
        </nav>
    );
};

export default Header;