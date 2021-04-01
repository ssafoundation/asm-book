import React from 'react';
import Product from '../Product/Product';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className='container'>
            <Navbar />
            <Product />
        </div>
    );
};

export default Home;