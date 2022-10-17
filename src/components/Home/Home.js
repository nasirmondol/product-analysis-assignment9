import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container bg-amber-50 mt-8'>
            <div className='m-10 p-4'>
                <h1 className='text-left text-4xl font-medium from-neutral-100 mb-5'>Best laptop 2022</h1>
                <p className='text-xl font-medium text-left'>Laptops. There are just so many of them. But what's the best laptop for you? Is it a powerful programming, business notebook, a powerful gaming laptop, or a Chromebook? We know the sheer number of choices can be overwhelming, which is why we made this list.
                </p>
                <button className='bg-emerald-600 m-8 w-48 p-3 rounded-md'>Buy Now</button>
            </div>
            <div className='mt-10 p-4'>
                <img width={800} src="https://cdn.mos.cms.futurecdn.net/gyEuSeYeqhcN8wrts6hqoY-970-80.jpg.webp" alt="" />
            </div>
        </div>
    );
};

export default Home;