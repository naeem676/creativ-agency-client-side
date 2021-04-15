import React from 'react';
import frame from "../../../../logos/Frame.png";

const Main = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-4 mt-5">
                        <h1>Let's Grow Your Brand To The Next Level</h1>
                        <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, officia?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, provident.</small><br/>
                        <button type="button" class="btn btn-dark mt-5">Hire us</button>
                    </div>
                    <div className="col-md-8 m">
                        <img className="w-100" src={frame} alt="" srcset=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;