
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import './Product.css';

const Product = (props) => {
    const [books, setBooks] = useState([])
    // const history = useHistory()
    useEffect(() => {

        fetch(`http://localhost:4200/showbook`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const handleBuyNow = (bookId) => {
        console.log(bookId);
        // const url = `/${books}`
        // history.push(url)
        // console.log(url);
    }
    console.log(books);
    return (
        <div className='container'>
            <SearchForm />
            <div className="row">
                {
                    books.map((book, index) => <div key={index} className="col-md-4">

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
            </div>
        </div>
    );
};

export default Product;