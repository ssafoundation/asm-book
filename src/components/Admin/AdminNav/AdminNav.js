import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <>
            <div className="deshboard-link">
                <Link to='/managebooks'><span><i className="fas fa-box"></i></span> Manage books</Link>
                <Link to='/addbook'><span><i className="fas fa-plus-square"></i></span> ADD Book</Link>
                <Link to='/editbook'><span><i className="far fa-edit"></i></span> Edit Book</Link>
            </div>
        </>
    );
};

export default AdminNav;