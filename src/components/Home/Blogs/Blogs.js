import React from 'react';
import './Blogs.css'
import image1 from '../../../images/blog-1.jpg'
import image2 from '../../../images/blog-2.jpg'
import image3 from '../../../images/blog-3.jpg'

const Blogs = () => {
    return (
        <div>
            <h1 className="text-primary fw-bold mt-5">Latest from Blog</h1>
            <div className="row blog mt-3">
                <div className="col-md-4 cart ">
                    <img src={image1} alt="" />
                    <h2>Air Fryer French Fries</h2>
                    <h4>Choose your favorite meals and order online or by phone. It's easy to customize your order.
                        <button className="btn btn-warning">see more</button>
                    </h4>
                </div>
                <div className="col-md-4 cart">
                    <img src={image2} alt="" />
                    <h2>Layered Yogurt Flatbreads</h2>
                    <h4>We prepared and delivered meals arrive at your door. Duis autem vel eum iriure dolor in hendrerit in vulputate.</h4>
                    <button className="btn btn-warning">see more</button>
                </div>
                <div className="col-md-4 cart">
                    <img src={image3} alt="" />
                    <h2>Any-kind-of-fruit Galette</h2>
                    <h4>No shooping, no cooking, no counting and no cleaning. Enjoy your healthy meals with your family.</h4>
                    <button className="btn btn-warning">see more</button>
                </div>
                </div>
        </div>
    );
};

export default Blogs;