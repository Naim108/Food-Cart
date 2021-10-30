import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className=" footer row p-5">
                <div className="col-md-4">
                <h1>Food Cart</h1>
                <p className="mt-5">+880 (6456) 890</p>
                <p>foodcartinfo@gmail.com</p>
                <p>Amstardom,Natherland</p>
                </div>
                <div className="col-md-4">
                    <h1>Links</h1>
                    <h5 className="mt-5">Home</h5>
                    <h5>About us</h5>
                    <h5>Food</h5>
                    <h5>Contact us</h5>
                </div>

                <div className="col-md-4">
                    <h1 >SUPPORT</h1>
                    <h5 className="mt-5">Contact Us</h5>
                    <h5>Visit Our client food shop</h5>
                    <h5>Refund Policy</h5>
                    <h5>Client satisfied</h5>
                </div>

            </div>
            <div className=" text-center text-light bg-dark">
                <p>© 2021 foodcart</p>
            </div>
            
        </div>
    );
};

export default Footer;