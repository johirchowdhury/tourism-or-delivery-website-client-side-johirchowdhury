import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className="w-50 mx-auto my-3">
                <img src={service.img} alt="" />
                <h3>{service.name}</h3>
                <h5>Price: {service.price}</h5>
                <p className="px-3">{service.description}</p>
                <Link to={`/orders/${service._id}`}>
                    <button className="btn btn-primary">Place Order </button>
                </Link>
            </div>
        </div>
    );
};

export default Booking;