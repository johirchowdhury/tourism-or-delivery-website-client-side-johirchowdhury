import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import useCart from '../../../hooks/useCart';
import { addToDb } from '../../../utilities/fakedb';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useCart();
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleAddToCart = (service) => {
        const exists = cart.find(pd => pd.key === service.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== service.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, service];
        }
        else {
            service.quantity = 1;
            newCart = [...cart, service];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(service.key);

    }
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        handleAddToCart={handleAddToCart}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;