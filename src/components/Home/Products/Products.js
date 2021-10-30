import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Products.css'

const Products = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('https://gentle-cove-50707.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
      },[])
    return (
        <div className="container mt-5">
            <h1>Our Food Items</h1>
            <p>Order and fast delivery</p>
                    <div className="row mt-4">
            {
                products?.map(product=><div className="col-md-4 g-4">
                    <Card className="card-container">

           <Card.Body>
           <Card.Text>
           <div>
               <img className="card-img" src={product.img} alt="" />
           <h4 className="fw-bold mt-3">{product.name}</h4>
           <p>{product.description.slice(0,50)}</p>
          
           </div>
          </Card.Text>
         </Card.Body>
          <Card.Footer className="bg-success  fw-bold ">
              <button className="btn text-light fw-bold">Order now</button>

          </Card.Footer>
          </Card>
                    
                </div>)
            }

        </div>
        </div>
    );
};

export default Products;