import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProductsResult from './pages/ProductsResult';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={Products} />
      <Route path="/products/result" component={ProductsResult} />
      <Route path="/products/:id" component={ProductDetail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
