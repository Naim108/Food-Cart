import React from 'react';
import './Partners.css'
import image1 from '../../../images/image1.png'
import image2 from '../../../images/image2.png'
import image3 from '../../../images/image3.png'
import image4 from '../../../images/image4.png'
import image5 from '../../../images/image5.png'
import image6 from '../../../images/image6.png'


const Blogs = () => {
    return (
        <div className="container">
            <h1 className=" fw-bold mt-5">Our Trusted Partners</h1>
            <div className="row m-5 image-size">
                <div className="col-md-2">
                <img src={image1} alt="" />
                </div>
                <div className="col-md-2">
                <img src={image2} alt="" />
                </div>
                <div className="col-md-2">
                <img src={image3} alt="" />
                </div>
                <div className="col-md-2">
                <img src={image4} alt="" />
                </div>
                <div className="col-md-2">
                <img src={image5} alt="" />
                </div>
                <div className="col-md-2">
                <img src={image6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
