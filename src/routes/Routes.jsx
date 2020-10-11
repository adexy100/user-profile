import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Home from '../views/home/home';
import Main from '../views/main/main';
import SignUp from '../views/auth/signup';
import SignIn from '../views/auth/signin';
import Account from '../views/account/account';
import ForgotPassword from '../views/auth/forgotPassword';
import Admin from '../views/admin/admin';
import UserItem from '../views/admin/components/userItem';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout component={Main} exact layout={MainLayout} path="/" />
      <RouteWithLayout
        component={Home}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={Admin}
        exact
        layout={MainLayout}
        path="/admin"
      />
      <RouteWithLayout
        component={UserItem}
        exact
        layout={MainLayout}
        path="/admin/:id"
      />
      <RouteWithLayout
        component={SignUp}
        exact
        layout={MainLayout}
        path="/signup"
      />
      <RouteWithLayout
        component={SignIn}
        exact
        layout={MainLayout}
        path="/signin"
      />
      <RouteWithLayout
        component={Account}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={ForgotPassword}
        exact
        layout={MainLayout}
        path="/forgotpassword"
      />
    </Switch>
  );
};

export default Routes;
