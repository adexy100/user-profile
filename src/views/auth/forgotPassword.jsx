import React, { Component } from 'react';
import { withFirebase } from '../../services/firebase';
import { Card, Row, Typography, Form, Alert, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const ForgotPassword = () => {
  return (
    <div>
      <ForgotPasswordForm />
    </div>
  );
};

class ForgotPasswordBase extends Component {
  state = { error: '' };

  handleFinish = (value) => {
    this.props.firebase
      .doPasswordRest(value.email)
      .catch((error) => this.setState({ error }));
  };

  render() {
    return (
      <Card style={{ paddingLeft: '5%' }}>
        <Row style={{ paddingBottom: '1%' }}>
          <Typography.Text underline strong style={{ fontSize: '22px' }}>
            Forgot Password
          </Typography.Text>
        </Row>
        <Row>
          <Form onFinish={this.handleFinish}>
            {this.state.error !== '' ? (
              <Form.Item>
                <Alert message={this.state.error} type="error" showIcon />
              </Form.Item>
            ) : null}
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="E-mail" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Resest My password
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Card>
    );
  }
}

const ForgotPasswordForm = withFirebase(ForgotPasswordBase);

export default ForgotPassword;
