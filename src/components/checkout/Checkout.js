import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
const axios = require('axios');

const Checkout = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkout, setCheckout] = useState({})
    useEffect(() => {
        fetch(`http://localhost:4200/checkout/${id}`)
            .then(res => res.json())
            .then(data => {
                setCheckout(data[0])
            })
    }, [id])
    const { name, BookPrice, Author, imageURL } = checkout
    // console.log(checkout);
    const newCheckout = {
        name: name,
        price: BookPrice,
        author: Author,
        image: imageURL
    }
    // console.log('newCheckout', newCheckout);
    const checkoutDetails = {
        ...loggedInUser, ...newCheckout
    }

    const handleCheckout = () => {
        console.log(checkoutDetails);
        const url = `http://localhost:4200/addOrder`;
        axios
            .post(url, checkoutDetails)
            .then((res) => {
                // console.log('response', res);
            })
            .catch((error) => {
                console.log(error);
            });
    }


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
                        <tr>
                            <td colSpan="2"></td>
                            <td><button onClick={handleCheckout} className='btn btn-success '><Link className='btnTextColor' to={'/order'}>Order Now</Link></button></td>
                        </tr>
                    </tbody>

                </Table>

            </div>
        </div>
    );
};

export default Checkout;