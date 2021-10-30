import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import WorkSystem from '../WorkSystem/WorkSystem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <WorkSystem></WorkSystem>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;