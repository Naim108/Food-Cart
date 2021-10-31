import React from "react";

import { useForm } from "react-hook-form";
const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    
    fetch('https://gentle-cove-50707.herokuapp.com/addProduct',{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      alert('Product added Successfully')
      
    })
    reset()
    
    
  };
  return (
    <div>
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="p-2 m-2"
          {...register("name")}
          required
          placeholder="Product name"
        />
        <input type="number"
          className="p-2 m-2"
          {...register("price")}
          required
          placeholder="Product price"
        />
        <input
          className="p-2 m-2"
          {...register("img")}
          required
          placeholder="Give your image link"
        />
        <input
          className="p-2 m-2"
          type="text"
          {...register("description", { required: true })}
          required
          placeholder="Description"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="p-1 mt-3 btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default AddProducts;
