import React from 'react';
import './WorkSystem.css'
import icon1 from '../../../images/restaurant.png'
import icon2 from '../../../images/motorbike.png'
import icon3 from '../../../images/salad.png'

const WorkSystem = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold mt-5">How it works</h1>
            <div className="row item">
                <div className="col-md-4">
                    <img src={icon1} alt="" />
                    <h2>Choose Your Favorite</h2>
                    <h4>Choose your favorite meals and order online or by phone. It's easy to customize your order.</h4>
                </div>
                <div className="col-md-4">
                    <img src={icon2} alt="" />
                    <h2>We Deliver Your Meals</h2>
                    <h4>We prepared and delivered meals arrive at your door. Duis autem vel eum iriure dolor in hendrerit in vulputate.</h4>
                </div>
                <div className="col-md-4">
                    <img src={icon3} alt="" />
                    <h2>Eat And Enjoy</h2>
                    <h4>No shooping, no cooking, no counting and no cleaning. Enjoy your healthy meals with your family.</h4>
                </div>

            </div>
        </div>
    );
};

export default WorkSystem;