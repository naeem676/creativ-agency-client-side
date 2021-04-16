import React from 'react';
import { useState } from 'react';
import logo from "../../logos/logo.png";
import AdminSidebar from '../adminSidebar/AdminSidebar';
import './AddService.css';

const AddService = () => {
    const [info, setInfo] = useState({title:'', description:'', status:'Pending'});
    const [file, setFile] = useState(null)
    const handleBlur = e=>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;

        setInfo(newInfo)
    }
    const handleFileChange = e =>{
        const newFile = e.target.files[0];
        setFile(newFile)
        
    }
    const handleSubmit = () => {
        
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('description', info.description)
        formData.append('status', info.status)
      
        fetch('http://localhost:4000/addService', {
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
      }

        
    
    return (
        <div>
            <div className="d-flex m-3">
                <p className="ml-5 mt-3"><img className="logo-order" src={logo} alt="" srcset=""/></p>
                <h5 className="mr-5 mt-5">add Service</h5>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                       <AdminSidebar></AdminSidebar>
                    </div>

                    <div className="col-md-10 bg-light">
                    <form className="m-5" onSubmit={handleSubmit}>
                        <div className="row bg-white p-3">
                            <div className="col-md-6">
                            <label>Title</label>
                            <input type="text" onBlur={handleBlur} name="title" class="form-control" id="exampleFormControlInput1" placeholder="Title"/><br/>
                            <label>Description</label>
                            <textarea name="description" onBlur={handleBlur} class="form-control" placeholder="Enter Description"  rows="3"></textarea><br/>
                            </div>
                            <div className="col-md-4">
                            <label>Icon</label>
                            <input onChange={handleFileChange} name="photo" type="file" class="form-control"/>
                            </div>
                        </div>
                        
                        <button type="submit" class="btn addBtn btn-success mt-2">Submit</button>
                  </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;