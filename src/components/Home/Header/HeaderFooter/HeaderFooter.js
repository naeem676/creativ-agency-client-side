import React from 'react';
import airbnb from "../../../../logos/airbnb.png";
import google from "../../../../logos/google.png";
import netflix from "../../../../logos/netflix.png";
import slack from "../../../../logos/slack.png";
import uber from "../../../../logos/uber.png";
import './HeaderFooter.css';

const HeaderFooter = () => {
    return (
        <div>
            <div className="logo-div">
                <img className="brand-logo" src={airbnb} alt="" srcset=""/>
                <img className="brand-logo" src={google} alt="" srcset=""/>
                <img className="brand-logo" src={netflix} alt="" srcset=""/>
                <img className="brand-logo" src={slack} alt="" srcset=""/>
                <img className="brand-logo" src={uber} alt="" srcset=""/>
            </div>
        </div>
    );
};

export default HeaderFooter;