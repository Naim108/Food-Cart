import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const [orders,setOrders]=useState([])
    

    useEffect(()=>{
        fetch('https://gentle-cove-50707.herokuapp.com/myOrders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
        
      },[])
    return (
        <div className=" container mt-5">
           <div className="row">
               <div className="col-md-12 text-center">
               <Table striped bordered hover>
  <thead>
    <tr>
      <th>Order Id</th>
      <th>Username</th>
      <th>Email</th>
      <th>Date</th>
      <th>Address</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    
      {
          orders?.map(order=><tr>
              <td>{order._id}</td>
      <td>{order.email}</td>
      <td>{order.userName}</td>
      <td>{order.date}</td>
      <td>{order.address}</td>
      <td className="text-primary">Pending</td>
          </tr>
              
          )
      }
    

  </tbody>
</Table>
               </div>
           </div>
        </div>
    );
};

export default MyOrders;