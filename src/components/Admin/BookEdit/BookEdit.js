import React from 'react';
import AdminNav from '../AdminNav/AdminNav';

const BookEdit = () => {
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
                    <h1>Book Edit</h1>
                </div>
            </div>
        </div>
    );
};

export default BookEdit;