import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Order = () => {
    const { user } = useFirebase();
    const { serviceId } = useParams();
    const [services, setServices] = useState({});

    const url = `http://localhost:5000/services/${serviceId}`;
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);



    const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;

        setOrderInfo(newInfo);
        console.log(newInfo);
    }
    const handleBookingSubmit = e => {
        e.preventDefault();
        const orders = {
            ...orderInfo,
            email: user.email,
            productName: services.name,
            price: services.price


        }
        //send to the server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log(orders)

    }
    return (
        <div>
            <Container>

                <Form onSubmit={handleBookingSubmit}>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control name="customerName" onBlur={handleOnBlur} type="text" value={user.displayName} placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" onBlur={handleOnBlur} name="email" value={user.email} placeholder="Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" onBlur={handleOnBlur} name="phone" placeholder="Phone Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" name="productName" value={services.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" name="price" value={services.price} />
                    </Form.Group>



                    <Button className="btn btn-primary" variant="primary" type="submit">
                        Order Confirm
                    </Button>
                </Form>
            </Container>
        </div>
    );
};


export default Order;