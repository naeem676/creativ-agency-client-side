import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import logo from "../../logos/logo.png";
import OrderDetails from '../orderDetails/OrderDetails';
import SideBar from '../sidebar/SideBar';

const ClientServiceList = () => {
    const [loggedUser, setLoggedUser] =useContext(UserContext);
    const [order, setOrder] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/findOrder?email=' + loggedUser.email, {
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrder(data))
    },[order]);
    return (
        <div>
            <div className="d-flex m-3">
                <p className="ml-5 mt-3"><img className="logo-order" src={logo} alt="" srcset=""/></p>
                <h5 className="mr-5 mt-5">Service list</h5>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                       <SideBar></SideBar>
                    </div>

                    <div className="col-md-10 bg-light">
                    <div className="container">
                        <div className="row">
                        {
                            order.map( or => <OrderDetails order={or} key={or._id} ></OrderDetails>)
                        }

                        </div>
                    </div>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientServiceList;