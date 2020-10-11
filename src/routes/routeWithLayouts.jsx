import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, auth, ...rest } = props;
  // console.log(props);
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout auth={auth}>
          <Component {...matchProps} auth={auth} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};
export default RouteWithLayout;
