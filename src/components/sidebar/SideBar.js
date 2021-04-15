import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faList, faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <Link to='/order' style={{textDecoration:'none'}}><p><FontAwesomeIcon icon={faShoppingCart} /> Order</p></Link>
            <Link to='/client' style={{textDecoration:'none'}}><p><FontAwesomeIcon icon={faList} /> Service list</p></Link>
            <Link to='/review' style={{textDecoration:'none'}}><p><FontAwesomeIcon icon={faComment} /> Review</p></Link>
        </div>
    );
};

export default SideBar;