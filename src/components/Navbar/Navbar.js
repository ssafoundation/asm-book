import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const MainNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);
    return (
        <div className='container'>
            <Navbar expand="lg">
                <Link to='/'> <h1 className='site-title'>ASM-<span>SHOP</span></h1></Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/order'>Order</Link>
                        <Link className="nav-link" to='/admin'>Admin</Link>
                        <Link className="nav-link" to='/deals'>Deals</Link>
                        <button className="nav-link btn btn-primary btnTextColor">
                            <img className="profile-logo" src={loggedInUser.URL} alt="" />Profile
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MainNav;