import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 3)))
    }, [])
    return (
        <div>
            <h2>This is review items: {reviews.length}</h2>
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;