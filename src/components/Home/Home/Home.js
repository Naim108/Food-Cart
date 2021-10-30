import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Partners from '../Partners/Partners';
import WorkSystem from '../WorkSystem/WorkSystem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <WorkSystem></WorkSystem>
            <Partners></Partners>
            
            
            
            <Footer></Footer>
        </div>
    );
};

export default Home;