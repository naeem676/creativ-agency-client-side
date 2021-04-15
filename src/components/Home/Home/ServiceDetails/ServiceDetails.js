import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ServiceContext } from '../../../../App';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    const [selected, setSelected] = useContext(ServiceContext)
    const history = useHistory();
    const {title, description} = service;
    const handleAddService = select =>{
        setSelected(select)
        history.push('/order')
    }
    return (
        <div onClick={()=>handleAddService(service)} className="col-md-4 text-center service  shadow p-3 mb-5 bg-body rounded">
        
        {service.image ? <img width='50' height='50' src={`data:image/png;base64,${service.image.img}`}/> : ''} <br/>
       
              <h4>{title}</h4><br/>
              <p>{description}</p>

        
            
        </div>
    );
};

export default ServiceDetails;