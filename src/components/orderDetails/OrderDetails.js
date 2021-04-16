import React from 'react';
import './OrderDetails.css'

const OrderDetails = ({order}) => {
    const {details, photo, course, status} = order;
    return (
        <div className="col-md-5 m-3 shadow p-3 mb-5 bg-body rounded">
           <div className="d-flex">
           <img width='50' height='50' src={`data:image/png;base64,${photo}`}/> 
           <p className="order mt-2">{status}</p>
           </div>
            <p>{course}</p>
            <p>{details}</p>
            
        </div>
    );
};

export default OrderDetails;