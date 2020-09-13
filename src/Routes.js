import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './ui/pages/Home';
import Palindrome from './ui/pages/Palindrome';
import CashChange from './ui/pages/CashChange';

// layout
import PublicLayout from './ui/layouts/public/index';

const NotFound = () => <div>Not found page</div>;

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (
        <PublicLayout>
          <Component {...props} />
        </PublicLayout>
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <PublicRoute
      exact
      path='/'
      component={Home}
    />
    <PublicRoute
      exact
      path='/palindrome'
      component={Palindrome}
    />
    <PublicRoute
      exact
      path='/cash-change'
      component={CashChange}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
