import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    const { name, img, description } = review;
    return (
        <div className='content-center p-4 border-current border-2 m-7 rounded-md'>
            <div className='justify-items-center m-5'>
                <img className='content-center' src={img} alt="" />
            </div>
            <div className='text-left'>
                <h5 className='text-3xl text-bold m-5'>{name}</h5>
                <p className='text-xl text-bold m-5'>{description}</p>
            </div>
        </div>
    );
};

export default Review;