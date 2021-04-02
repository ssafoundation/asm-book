
import './App.css';
import Home from './components/Home/Home';
// import Navbar from './components/Navbar/Navbar';
// import Product from './components/Product/Product';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from './components/Admin/Admin';
import ManageBooks from './components/Admin/ManageBooks/ManageBooks';
import AddBook from './components/Admin/AddBook/AddBook';
import BookEdit from './components/Admin/BookEdit/BookEdit';
import Order from './components/Order/Order';
import Checkout from './components/checkout/Checkout';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="container-fluid ">
          {/* <Navbar /> */}
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <PrivateRoute path="/checkout/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/managebooks">
              <ManageBooks />
            </PrivateRoute>
            <PrivateRoute path="/addbook">
              <AddBook />
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order />
            </PrivateRoute>
            <PrivateRoute path="/editbook">
              <BookEdit />
            </PrivateRoute>
            <Route exect path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
