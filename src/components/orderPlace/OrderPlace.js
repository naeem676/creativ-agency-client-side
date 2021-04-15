import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ServiceContext, UserContext } from '../../App';
import logo from "../../logos/logo.png";
import AdminSidebar from '../adminSidebar/AdminSidebar';
import SideBar from '../sidebar/SideBar';
import './OrderPlace.css';

const OrderPlace = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    const [selected, setSelected] = useContext(ServiceContext);
    
    const [user, setUser] = useState({
        name: loggedUser.displayName,
        email:loggedUser.email,
        course: selected.title,
        details:selected.description,
        price:''
    });
    const [file, setFile] = useState(null);

   
      
    const handleBlur = e =>{
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
        

    }

    const handleChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile)
        

    }

    const handleSubmit = e => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', user.name)
        formData.append('email', user.email)
        formData.append('course', user.course)
        formData.append('details', user.details)
        formData.append('price', user.price)
        formData.append('photo', selected.image.img)
        
      
        fetch('http://localhost:4000/addOrder', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
        e.preventDefault();
      }

      const history = useHistory();

      useEffect(()=>{
        fetch('http://localhost:4000/admin', {
          method:"POST",
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({email:loggedUser.email})
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            history.push('/admin')
          }
        })
      },[]);
    
    return (
        <div>
            <div className="d-flex m-3">
                <p className="ml-5 mt-3"><img className="logo-order" src={logo} alt="" srcset=""/></p>
                <h5 className="mr-5 mt-5">Order</h5>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                      <div>
                      <SideBar></SideBar>
                      </div>
                      <div>
                         
                      </div>
                    </div>

                    <div className="col-md-10 bg-light">
                    <form className="m-5" onSubmit={handleSubmit}>
                        <input type="text" class="form-control" onBlur={handleBlur} name="name" value={loggedUser.displayName}  placeholder="Your name/company's name"/><br/>
                        <input type="email" class="form-control" onBlur={handleBlur} name="email" value={loggedUser.email} placeholder="Your Email address"/><br/>
                        <input type="text" class="form-control" onBlur={handleBlur} name="course" value={selected.title} placeholder="Course Name"/><br/>
                        <textarea class="form-control" onBlur={handleBlur} name="details" value={selected.description} placeholder="Project Details"  rows="3"></textarea><br/>
                        <div class="form-row">
                            <div class="col">
                            <input type="text" onBlur={handleBlur} name="price" class="form-control" placeholder="Price"/>
                            </div>
                            <div class="col">
                            <input type="file" onChange={handleChange} name="file"  class="form-control" />
                            </div>
                        </div><br/>
                        <button type="submit" class="btn btn-dark">Send</button>
                  </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPlace;