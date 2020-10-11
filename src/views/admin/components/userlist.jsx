import React, { Component } from 'react';
import { Card, Row, List, Col, Typography, Skeleton } from 'antd';
import { withFirebase } from '../../../services/firebase';
import { Link } from 'react-router-dom';

class UserList extends Component {
  state = { users: [], loading: false };
  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on('value', (snapshot) => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({ users: usersList, loading: false });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }
  render() {
    return (
      <Card>
        <Row justify="center">
          <h2>UserList</h2>
        </Row>
        <List
          itemLayout="horizontal"
          dataSource={this.state.users}
          renderItem={(item) => (
            <Row justify="center">
              <Col span={10}>
                <Skeleton loading={this.state.loading} active>
                  <List.Item
                    actions={[
                      <Link
                        to={{ pathname: `admin/${item.uid}`, state: { item } }}
                      >
                        Details
                      </Link>,
                    ]}
                  >
                    <List.Item.Meta
                      title={item.username}
                      description={item.email}
                    />
                    <div>
                      {item.roles && (
                        <Typography.Text keyboard>Admin</Typography.Text>
                      )}
                    </div>
                  </List.Item>
                </Skeleton>
              </Col>
            </Row>
          )}
        />
      </Card>
    );
  }
}

export default withFirebase(UserList);
