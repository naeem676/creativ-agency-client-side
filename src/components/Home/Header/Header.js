import React from 'react';
import HeaderFooter from './HeaderFooter/HeaderFooter';
import Main from './main/Main';
import Nav from './nav/Nav';
import './Header.css';


const Header = () => {
    return (
        <div>
            <div className="header">
            <Nav></Nav>
            <Main></Main>
            
        </div>
        <div>
        <HeaderFooter></HeaderFooter>
        </div>
        </div>
    );
};

export default Header;