import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminNav from '../AdminNav/AdminNav';
import './AddBook.css';
const AddBook = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState('')
    const onSubmit = data => {
        const eventBookData = {
            name: data.BookName,
            Author: data.BookAuthor,
            BookPrice: data.BookPrice,
            imageURL: imageUrl
        }
        fetch('http://localhost:4200/addbook', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(eventBookData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleImageChange = (e) => {
        const imageData = new FormData();
        imageData.set('key', '86ec8bdd62fc8b45cbd323994c8b65ea')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

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
                    <h3>Add Book</h3>
                    <div className="book-now-form">
                        <form className="row" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-lg-6">
                                <input type="text" name="BookName" placeholder="Book Name" ref={register} />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" name="BookAuthor" placeholder="Book Author" ref={register} />
                            </div>
                            <div className="col-lg-6">
                                <input type="number" name="BookPrice" placeholder="Book Price" ref={register} />
                            </div>
                            <div className="col-lg-6">
                                <input className="bookFile" type="file" name="BookImage" onChange={handleImageChange} />
                            </div>
                            <div className="col-lg-6">
                                {/* <input className="btn btn-primary btnTextColor" type="submit" /> */}
                            </div>
                            <div className="col-lg-6">
                                <input className="btn btn-primary btnTextColor" type="submit" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddBook;