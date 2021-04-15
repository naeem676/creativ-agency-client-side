import React, { useState } from 'react';
import logo from "../../logos/logo.png";
import AdminSidebar from '../adminSidebar/AdminSidebar';

const MakeAdmin = () => {
    const [email, setEmail] = useState({});
    const handleBlur = e =>{
        const newEmail = {...email}
        newEmail[e.target.name] = e.target.value;
         setEmail(newEmail)
    }
    const handleSubmit = e =>{
        const newEmail = {...email}
        fetch('http://localhost:4000/addAdmin', {
            method:"POST",
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(newEmail)
        })
        e.preventDefault();
    }
    return (
        <div>
            <div className="d-flex m-3">
                <p className="ml-5 mt-3"><img className="logo-order" src={logo} alt="" srcset=""/></p>
                <h5 className="mr-5 mt-5">Make admin</h5>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                      <AdminSidebar></AdminSidebar>
                    </div>

                    <div className="col-md-10 bg-light">
                   <form onSubmit={handleSubmit}>
                   <div className="row p-3">
                        <div className="col-md-6">
                        <input type="email" class="form-control ml-5" onBlur={handleBlur} name="email" placeholder="name@example.com"/>
                        </div>
                        <div className="col-md-2"> <button type="submit" class="btn btn-success">Submit</button></div>
                    </div>
                   </form>
                   
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;