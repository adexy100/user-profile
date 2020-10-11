import React from 'react';
import { withAuthentication } from './services/auth';
import Routes from './routes/Routes';

const App = () => {
  return (
    <div>
      <Routes />
    </div>
  );
};

export default withAuthentication(App);
