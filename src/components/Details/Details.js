import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Details.css'

const Details = () => {
    const {productId}=useParams()
    const [details,setDetails]=useState([])
    const [orders,setOrders]=useState();
    useEffect(()=>{
        fetch(`https://gentle-cove-50707.herokuapp.com/products/${productId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))

    },[])
    // handle form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        fetch(`https://gentle-cove-50707.herokuapp.com/products/${productId}`,{
            method: 'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(data=>
            setOrders(data))
            alert('Order successfull')
            reset()
          
        
      };
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-md-7">
                    <img className="image"  src={details?.img} alt="" />
                   <h1>{details?.name}</h1>
                   <p>{details.description}</p>
                   <h3 className="delivery fw-bold">Price ${details.price}</h3>

                </div>
                <div className="col-md-5 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="p-2 w-100 mt-5 m-2"
          {...register("email")}
          required
          placeholder="Enter Your Email"
        /> <br />
        <input
          className="p-2 w-100 m-2"
          {...register("userName")}
          required
          placeholder="Enter your user name"
        /> <br />
        <input type="date"
          className="p-2 w-100 m-2"
          {...register("date")}
          required
         
        /> <br />
        <input
          className="p-4 w-100 m-2"
          {...register("address")}
          required
          placeholder="Enter your Address"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="p-3 mt-3 btn btn-success" type="submit" value="Place Order"  />
        
        
      </form>
                </div>

            </div>
        </div>
    );
};

export default Details;