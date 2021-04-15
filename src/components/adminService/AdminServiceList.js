import React, { useEffect, useState } from 'react';
import logo from "../../logos/logo.png";
import AdminSidebar from '../adminSidebar/AdminSidebar';
import AllOrderList from '../allorderlist/AllOrderList';
import './AdminService.css';

const AdminServiceList = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/allOrder')
        .then(res => res.json())
        .then(data => setAllOrder(data))
    },[allOrder])
    return (
        <div>
            <div className="d-flex m-3">
                <p className="ml-5 mt-3"><img className="logo-order" src={logo} alt="" srcset=""/></p>
                <h5 className="mr-5 mt-5">Service list</h5>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                      <AdminSidebar></AdminSidebar>
                    </div>

                    <div className="col-md-10 bg-light">
                    <table class="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col" >Project Details</th>
                            <th scope="col" >status</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        allOrder.map( all => <AllOrderList orderList={all} key={all._id}></AllOrderList>)
                    }
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;