import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
const Checkout = () => {
    const { id } = useParams();
    const [checkout, setCheckout] = useState({})

    console.log(id, 'checkout id');
    useEffect(() => {
        fetch(`http://localhost:4200/checkout/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCheckout(data[0])
            })

    }, [id])
    console.log('checkout', checkout);
    return (
        <div className='container'>
            <Navbar />
            <h1>hello</h1>
            <div className='order-table-wrap'>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{checkout.name}</td>
                            <td>1</td>
                            <td>${checkout.BookPrice}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Total</td>
                            <td>${checkout.BookPrice}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Checkout;