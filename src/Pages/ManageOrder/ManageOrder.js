import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageOrder')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/manageOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("Data Successfully Deleted");
                    const remaining = services.filter(service => service._id !== id);
                    setService(remaining);
                }
            })
    }
    return (
        <div className="container">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Client Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        services.map(service => <tr key={service._id}>

                            <td>{service.productName}</td>
                            <td>{service.price}</td>
                            <td>{service.email}</td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(service._id)}>Delete</button></td>




                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ManageOrder;