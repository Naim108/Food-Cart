import React from 'react';
import Footer from '../Shared/Footer/Footer';
import './About.css'

const About = () => {
    return (
        <div>
                    <div className="about-banner">
           <div className="row p-3 container">
               <h1 className="fw-bold text-light">WELCOME TO FOOD CART</h1>
               <div className="col-md-9">
                   <h5 className="fw-bold mt-5 text-light ">
                   Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered 
                   to your office or looking to avoid the weekly shop? Then foodcart Bangladesh is the right destination
                   for you! foodcart offers you a long and detailed list of the best restaurants and shops near you to help
                    make your everyday easier. Our online food delivery service has it all, whether you fancy a juicy burger 
                    from Takeout, fresh sushi from Samdado or peri peri chicken from Nando's, foodcart Bangladesh has over 
                    2000 restaurants available from Dhaka to Chittagong through to Sylhet. Did you know you can order your 
                    groceries and more from foodcart, too? Check out foodcart shops for favourite partners like Unimart, 
                    Suborno, Shwapno, Bengal Meat, and much more. 
                   Sit back and relax – let foodcart Bangladesh take the pressure off your shoulders.
                   </h5>

               </div>
               <div className="col-md-3">

               </div>
           </div>
        </div>
            <div className="mt-1">
            <Footer></Footer>
            </div>
        </div>
        
    );
};

export default About;