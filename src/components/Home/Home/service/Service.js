import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/findService')
        .then(res => res.json())
        .then(data => setService(data))
    },[service])
    return (
        <div className="container">
          <div className="row">
           {
               service.map(serv => <ServiceDetails service={serv} key={serv._id}></ServiceDetails>)
           }
          </div>
        </div>
    );
};

export default Service;