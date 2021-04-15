import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import logo from "../../logos/logo.png";
import SideBar from '../sidebar/SideBar';


const Review = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    const [review, setReview] = useState({email:loggedUser.email, name:loggedUser.displayName, description:'' })
    
    const handleBlur = e =>{
        const newReview = {...review}
        newReview[e.target.name] = e.target.value ;
        setReview(newReview)
       
    }
    const handleSubmit = e =>{
        const finalReview = {...review, photo:loggedUser.photoURL}
        fetch('http://localhost:4000/addReview', {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(finalReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('review posted')
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <div className="d-flex m-3">
                <p className="ml-5 mt-3"><img className="logo-order" src={logo} alt="" srcset=""/></p>
                <h5 className="mr-5 mt-5">Review</h5>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                       <SideBar></SideBar>
                    </div>

                    <div className="col-md-10 bg-light">
                    <form className="m-5" onSubmit={handleSubmit}>
                        
                        <input type="email" class="form-control" onBlur={handleBlur} name="email" value={loggedUser.email} placeholder="name@example.com"/><br/>
                        <input type="text" class="form-control" onBlur={handleBlur} name="name" value={loggedUser.displayName} placeholder="Your name/company's name"/><br/>
                        <textarea class="form-control" onBlur={handleBlur} name="description" placeholder="Description"  rows="3"></textarea><br/>
                        <button type="submit" class="btn btn-dark">Submit</button>
                  </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;