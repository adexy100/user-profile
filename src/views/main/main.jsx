import React, { Component } from 'react';
import { Card, Row, Result } from 'antd';
import { HomeFilled } from '@ant-design/icons';
class Main extends Component {

  render() {
    return (
      <Card bordered={false}>
        <Row justify="center">
          <Result icon={<HomeFilled />} title="This is Main home page " />
        </Row>
      </Card>
    );
  }
}

export default Main;
