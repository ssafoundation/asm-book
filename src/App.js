
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


function App() {
  return (
    <Router>
      <div className="container-fluid">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/checkout/:id">
            <Checkout />
          </Route>
          <Route path="/managebooks">
            <ManageBooks />
          </Route>
          <Route path="/addbook">
            <AddBook />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/editbook">
            <BookEdit />
          </Route>
          <Route exect path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
