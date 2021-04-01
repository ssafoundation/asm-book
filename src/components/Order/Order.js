import React from 'react';
import { Table } from 'react-bootstrap';
// import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import './Order.css'
const Order = () => {
    // const { books } = useParams()
    // const [details, setDetails] = useState({});
    // useEffect(() => {
    //     const url = `https://restcountries.eu/rest/v2/name/${books}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setDetails(data[0]))

    // });
    return (
        <div className='container'>
            <Navbar />
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
                            <td>Favorite Book</td>
                            <td>1</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Total</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Order;