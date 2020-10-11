import React from 'react';
import { Card, Row, Result } from 'antd';
import { withAuthorization } from '../../services/auth';
import { DesktopOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <Card bordered={false}>
      <Row justify="center">
        <Result
          icon={<DesktopOutlined />}
          title="The Home Page is accessible by every signed in user."
        />
      </Row>
    </Card>
  );
};
const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Home);
