import React, { useEffect, useState } from 'react';
import FeedBackDetails from '../../feedbackdetails/FeedBackDetails';

const Feedback = () => {
    const [feedBack, setFeedBack] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/findAllReview')
        .then(res => res.json())
        .then(data => setFeedBack(data))
    },[feedBack])
    return (
        <div>
            <div className="text-center">
                <h1>Clients <span className="text-info">Feedback</span></h1>
            </div>
            <div className="container mt-5">
            <div className="row">
               {
                   feedBack.map( feed => <FeedBackDetails key={feed._id} feedback={feed}></FeedBackDetails>)
               }
            </div>

            </div>
        </div>
    );
};

export default Feedback;