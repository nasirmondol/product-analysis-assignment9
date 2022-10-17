import React from 'react';

const Review = ({review}) => {
    const {name, img, description} = review;
    return (
        <div>
            <h5>Name: {name}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Review;