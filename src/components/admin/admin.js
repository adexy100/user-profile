import React from 'react';
import { Card, Row, Result } from 'antd';
import { withAuthorization } from '../Session';
import { UserOutlined } from '@ant-design/icons';
import UserList from './components/userlist';

const Admin = () => {
  return (
    <Card bordered={false}>
      <Row justify="center">
        <Result
          icon={<UserOutlined />}
          title="The Admin Page is accessible by every signed in admin user."
        />
      </Row>
      <UserList />
    </Card>
  );
};
const condition = (authUser) => authUser && !!authUser.roles['ADMIN'];

export default withAuthorization(condition)(Admin);
