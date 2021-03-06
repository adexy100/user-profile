import { Button } from 'antd';
import React from 'react';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => {
  return (
    <Button type="primary" onClick={firebase.doSignOut}>
      Sign Out
    </Button>
  );
};

export default withFirebase(SignOutButton);
