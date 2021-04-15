import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faPlus, faUserPlus  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div>
            
            <Link to='/admin' style={{textDecoration:'none'}}><p><FontAwesomeIcon icon={faList} /> Service list</p></Link>
            <Link to='/addService' style={{textDecoration:'none'}}><p><FontAwesomeIcon icon={faPlus} /> add Service</p></Link>
            <Link to='/makeAdmin' style={{textDecoration:'none'}}><p><FontAwesomeIcon icon={faUserPlus} /> Make Admin</p></Link>
        </div>
    );
};

export default AdminSidebar;