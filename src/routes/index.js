import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import MapStore from '../pages/MapStore';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";
import Login from '../pages/Login'

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/mapa" component={MapStore} />
          <Route exact path="/" component={Store}/>
          <Route path="/carrinho" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;