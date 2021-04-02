
import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import './Product.css';

const Product = (props) => {
    const [books, setBooks] = useState([])
    const [preloder, setPreloder] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:4200/showbook`)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setPreloder(true)
            })
    }, [])
    const handleBuyNow = (bookId) => {
        console.log(bookId);

    }
    // console.log(books);
    return (
        <div className='container'>
            <SearchForm />
            {
                preloder ? (<div className="row">
                    {
                        books.map((book, index) => <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">

                            <div className="shingle-product">
                                <Card >
                                    <Card.Img variant="top" src={book.imageURL} />
                                    <Card.Body>
                                        <Card.Title>{book.name}</Card.Title>
                                        <Button onClick={() => handleBuyNow(book._id)} variant="primary"><Link className="btnTextColor" to={`/checkout/${book._id}`}>Buy Now</Link></Button>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>)
                    }
                </div>) : <div className="preloader">
                    <Spinner animation="border" variant="primary" />
                </div>
            }
        </div>
    );
};

export default Product;