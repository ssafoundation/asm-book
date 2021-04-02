import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import { useHistory } from 'react-router';

import AdminNav from '../AdminNav/AdminNav';
import './ManageBook.css'

const ManageBooks = () => {
    const [reloadData, setReloadData] = useState(false);

    const [books, setBooks] = useState([])
    // const history = useHistory()
    useEffect(() => {
        fetch(`http://localhost:4200/showbook`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [reloadData])

    const handleBookDelete = (id) => {
        fetch(`http://localhost:4200/delete/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    setReloadData(true)
                }
            })
    }
    console.log(books);
    return (
        <div className="row">
            <div className="col-lg-4">
                <aside className="admin-dashboard-wrap">
                    <h3>ASM-SHOP BOARD</h3>
                    <AdminNav />
                </aside>
            </div>
            <div className="col-lg-8">
                <div className="deshboard-details">
                    <div className="manage-books-title">
                        <h3>Manage Title</h3>
                    </div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            books.map((books, index) => <tbody key={index}>
                                <tr>
                                    <td>{books.name}</td>
                                    <td>{books.Author}</td>
                                    <td>{books.BookPrice}</td>
                                    <td className='manage-book-btn'>
                                        <button className="fas fa-edit"></button>
                                        <button onClick={() => handleBookDelete(books._id)} className="fas fa-trash-alt"></button>
                                    </td>
                                </tr>
                            </tbody>)
                        }


                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooks;