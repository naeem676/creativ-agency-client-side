import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from "../../../../logos/logo.png";

const Nav = () => {
  const history = useHistory();
  const handleLogged = () => {
    history.push('/order')
  }
  

    return (
        <nav class="navbar navbar-expand-lg navbar-light p-3 ">
        <div class="container-fluid ">
        <img className="w-25" src={logo} alt="" srcset=""/>
          <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span  class="navbar-toggler-icon"></span>
          </button>
         <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item ">
                <Link class="nav-link mr-5  active" aria-current="page" >Home</Link>
              </li>
              <li class="nav-item">
                <Link  class="nav-link mr-5" >Our Portfolio</Link>
              </li>
              <li class="nav-item">
                <Link  class="nav-link mr-5" >Our Team</Link>
              </li>
              <li class="nav-item">
                <Link  class="nav-link mr-5" >Contract Us</Link>
              </li>
              <li class="nav-item">
              <button type="button" onClick={handleLogged} class="btn btn-dark">Log in</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Nav;