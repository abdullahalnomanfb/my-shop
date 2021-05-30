import React from 'react';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductListing from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';

const App = () => {
  return (
    <Router >
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route path="*">
          <h3 className="text-center mt-5 ">404 NOT FOUND</h3>
        </Route>
      </Switch>
    </Router>

  );
};

export default App;