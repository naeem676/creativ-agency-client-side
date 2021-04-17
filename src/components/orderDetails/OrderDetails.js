import React from 'react';
import './OrderDetails.css'

const OrderDetails = ({order}) => {
    const {details, photo, course, status} = order;
   
    let style = {color:'', backgroundColor:'', height:'100%'}
    if(order.status === "Done"){
        style.color = 'White';
        style.backgroundColor = 'rgb(113, 211, 113)';
    }
    if(order.status === "On going"){
        style.color = 'White';
        style.backgroundColor = 'rgb(119, 119, 219)';
    }
    if(order.status === "Pending"){
        style.color = 'white';
        style.backgroundColor = 'rgb(223, 109, 109)';
    }
   
   
    return (
        <div className="col-md-5 m-3 shadow p-3 mb-5 bg-body rounded">
           <div className="d-flex">
           <div><img width='50' height='50' src={`data:image/png;base64,${photo}`}/></div> 
           <div style={style}  className="ml-5 mt-2 text-center p-2"><option >{status}</option></div>
           </div>
            <div className="mt-3">
            <p>{course}</p>
            <p>{details}</p>
            </div>
            
        </div>
    );
};

export default OrderDetails;