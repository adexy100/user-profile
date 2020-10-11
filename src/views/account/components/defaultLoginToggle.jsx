import React, { Component } from 'react';
import { Button, Form, Input, Card, Row, Spin } from 'antd';
class DefaultLoginToggle extends Component {
  state = { visible: false };
  handleFinish = (value) => {
    this.props.onLink(value.password);
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
    }, 1000);
  }
  render() {
    const { onlyOneLeft, isEnabled, signInMethod, onUnlink } = this.props;
    return this.state.visible ? (
      <div>
        {isEnabled ? (
          <Button
            type="primary"
            onClick={() => onUnlink(signInMethod.id)}
            disabled={onlyOneLeft}
          >
            Deactivate {signInMethod.id}
          </Button>
        ) : (
          <Card>
            <Form onFinish={this.handleFinish}>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        'The two passwords that you entered do not match!'
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Row justify="center">
                  <Button type="primary" htmlType="submit">
                    Link {signInMethod.id}
                  </Button>
                </Row>
              </Form.Item>
            </Form>
          </Card>
        )}
      </div>
    ) : (
      // <Card>
      <Row justify="center" style={{ paddingTop: '5%' }}>
        <Spin size="large" />
      </Row>
      // </Card>
    );
  }
}

export default DefaultLoginToggle;
