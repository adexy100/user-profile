import React from 'react';
import { Card, Row, Result } from 'antd';
import { withAuthorization } from '../Session';
import { DesktopOutlined } from '@ant-design/icons';
import { withEmailVerification } from '../Session';
import { compose } from 'recompose';
import Messages from '../Messages';

const Home = () => {
  return (
    <div>
      <Card bordered={false}>
        <Row justify="center">
          <Result
            icon={<DesktopOutlined />}
            title="The Home Page is accessible by every signed in user."
          />
        </Row>
      </Card>

      <Messages />
    </div>
  );
};
const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Home);
