import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Layout, Button } from 'antd';
import { AuthUserContext } from '../Session';
import SignOutButton from './signout';

const Navbar = () => (
  <Layout.Header>
    <Row>
      <Col>
        <NavLink to="/">
          <img src="favicon.ico" alt="" style={{ height: '30%' }} />
        </NavLink>
        <Button type="link">
          <NavLink to="/">Main</NavLink>
        </Button>
      </Col>
      <Col>
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? (
              <NavigationAuth authUser={authUser} />
            ) : (
              <NavigationNonAuth />
            )
          }
        </AuthUserContext.Consumer>
      </Col>
    </Row>
  </Layout.Header>
);

const NavigationAuth = ({ authUser }) => {
  return (
    <div>
      <Button type="link">
        <NavLink to="/home">Home</NavLink>
      </Button>
      <Button type="link">
        <NavLink to="/account">Account</NavLink>
      </Button>
      {!!authUser.roles['ADMIN'] && (
        <Button type="link">
          <NavLink to="/admin">Admin</NavLink>
        </Button>
      )}
      <SignOutButton />
    </div>
  );
};
const NavigationNonAuth = () => {
  return (
    <div>
      <Button type="primary">
        <NavLink to="/signin">sign In</NavLink>
      </Button>
    </div>
  );
};
export default Navbar;
