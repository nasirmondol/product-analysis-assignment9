import React, { useEffect, useState } from 'react';
import useReviews from '../../useReviews';
import './ReviewDetails.css'

const ReviewDetails = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div >
            {
                reviews.map(review => <div className='p-4 border-current border-2 border-cyan-900 m-7 rounded-md'>
                    <img src={review.img} alt="" />
                    <h3 className='text-lime-600 text-left text-3xl text-bold m-2'>{review.name}</h3>
                    <p className='text-blue-500	text-left text-xl text-bold'>{review.description}</p>
                </div>)
            }
        </div>
    );
};

export default ReviewDetails;