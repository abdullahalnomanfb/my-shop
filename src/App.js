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
    <div>

      <Router >
        <Header />
        <Switch>

          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productID" exact component={ProductDetail} />
          <Route > 404 Not Fount! </Route>
          
        </Switch>
      </Router>
    </div>
  );
};

export default App;