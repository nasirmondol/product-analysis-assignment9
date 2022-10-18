import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg?w=2000" alt="" />
            <div>
                <button className='bg-orange-400 text-xl text-bold m-9 p-4 rounded-md text-white'>
                    <Link to='/home'>Back to home page</Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;