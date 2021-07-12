import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/index';
import ProductListing from './containers/ProductListing/index';
import ProductDetails from './containers/ProductDetails/index';

import './style.css';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not found</Route>
        </Switch>
      </Router>
    </div>
  );
}
