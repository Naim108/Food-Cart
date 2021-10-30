import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="row container">
                <div className="col-md-8 banner-details">
                    <h1>Organic Food
                      Delivery Service</h1>
                    <p>Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</p> <br />

                    <button className="details-btn">Get started</button>



                </div>
                <div className="col-md-4">

                </div>


            </div>
            

        </div>
    );
};

export default Banner;