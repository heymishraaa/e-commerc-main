import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Wishlist from './Wishlist'; // Import Wishlist
import ProductDetails from './ProductDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from './ProductList';

function App() {
  return (
      <Router>
          <div className="app">
              <Header />
              <Switch>
                  <Route path="/checkout">
                      <Checkout />
                  </Route>
                  <Route path="/wishlist">
                      <Wishlist />
                  </Route>
                  <Route path="/product/:id" component={ProductDetails} />
                  <Route path="/product-list"> {/* Add this route */}
                      <ProductList />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
