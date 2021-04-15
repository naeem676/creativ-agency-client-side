import React from 'react';
import './HomeFooter.css'

const HomeFooter = () => {
    return (
        <div className="container p-5 bg-warning mt-5">
        <div className="row">
            <div className="col-md-5">
                <h1>Let's handle your project, professionally</h1>
                <small>With well written codes, we build amazing platforms, mobile and web apps in general</small>
            </div>
            <div className="col-md-5">
                  <form action="">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/><br/>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name/company's name"/><br/>
                  <textarea class="form-control" placeholder="Your message" id="exampleFormControlTextarea1" rows="3"></textarea><br/>
                  <button type="button" class="btn btn-dark">send</button>
                  </form>
            </div>
            
        </div>
        <div className="home-footer">
        <small className="text-center">copyright Orange labs 2020 </small>

        </div>
           
        </div>
    );
};

export default HomeFooter;