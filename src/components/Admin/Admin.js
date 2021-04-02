import React from 'react';

import './Admin.css'
import AdminNav from './AdminNav/AdminNav';
import Login from './Login/Login'

const Admin = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4">
                    <aside className="admin-dashboard-wrap">
                        <h3>ASM-SHOP BOARD</h3>
                        <AdminNav />
                    </aside>
                </div>
                <div className="col-lg-8">
                    <div className="deshboard-details">
                        <h3>Admin Login</h3>
                        <Login />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
