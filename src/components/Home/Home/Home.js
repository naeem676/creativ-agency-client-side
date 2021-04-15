import React from 'react';
import Header from '../Header/Header';
import MainCarousel from './Carousel/MainCarousel';
import Feedback from './feedback/Feedback';
import HomeFooter from './HomeFooter/HomeFooter';
import Service from './service/Service';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <MainCarousel></MainCarousel>
            <Feedback></Feedback>
            <HomeFooter></HomeFooter>
           
        </div>
    );
};

export default Home;