import React, { useContext, useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
// import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import './Order.css'
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])
    const [preloder, setPreloder] = useState(false)
    useEffect(() => {
        fetch('http://localhost:4200/showOrder?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
        setPreloder(true)
    }, [])
    const totalPrice = orders.reduce(
        (total, order) => total + Number(order.price), 0
    )
    return (
        <div className='container'>
            <Navbar />
            <div className='order-table-wrap'>
                <div className="order-profile">
                    <div className="profile-left">
                        <img src={loggedInUser.URL} alt="" />
                    </div>
                    <div className="profile-right">
                        <h4>{loggedInUser.name}</h4>
                        <p>{loggedInUser.email}</p>
                    </div>
                </div>

                <Table responsive>
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {
                        preloder ? (<tbody>
                            {
                                orders.map((order, index) => <tr key={index}>
                                    <td>{order.name}</td>
                                    <td>1</td>
                                    <td>{order.price}</td>
                                </tr>

                                )
                            }
                            <tr>
                                <td colSpan="2">Total</td>
                                <td>${totalPrice}</td>
                            </tr>
                        </tbody>) : <div className="preloader">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    }


                </Table>
            </div>
        </div>
    );
};

export default Order;