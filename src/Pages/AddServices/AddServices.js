import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';
const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully added");
                    reset();
                }
            })
    };
    return (
        <div className="add-Service">
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 300 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} />
                <input  {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;